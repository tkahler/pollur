package com.pollur.app.controller;

import com.pollur.app.domain.Poll;
import com.pollur.app.domain.User;
import com.pollur.app.domain.UserPollVoteHistory;
import com.pollur.app.domain.dto.PollDTO;
import com.pollur.app.domain.dto.UserPollVoteDTO;
import com.pollur.app.domain.exception.UnauthorizedException;
import com.pollur.app.mapper.PollMapper;
import com.pollur.app.repository.PollRepository;
import com.pollur.app.repository.UserPollVoteHistoryRepository;
import com.pollur.app.domain.exception.ResourceNotFoundException;
import com.pollur.app.service.SecurityService;
import com.pollur.app.domain.TimeFilterEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/poll")
@CrossOrigin
public class PollController {

    @Autowired
    PollRepository pollRepository;

    @Autowired
    UserPollVoteHistoryRepository userPollVoteHistoryRepository;

    @Autowired
    SecurityService securityService;

    @GetMapping("/{id}")
    public PollDTO getPollById(@PathVariable Long id) {
        User user = securityService.getAuthenticatedUser();

        Poll poll = pollRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        UserPollVoteHistory vote = null;
        if(user != null) {
            vote = userPollVoteHistoryRepository.findByUserIdAndPollId(user.id, poll.id);
        }
        return PollMapper.pollAndVoteToDTO(poll, vote);
    }


    @GetMapping()
    public List<PollDTO> getPollsByPage(@RequestParam("t") TimeFilterEnum timeFilter, @RequestParam("page") int page) {
        User user = securityService.getAuthenticatedUser();

        Pageable pageRequest = PageRequest.of(page - 1, 20, Sort.by("createdDateTime").descending());
        List<Poll> polls = pollRepository.findByCreatedDateTimeGreaterThan(timeFilter.getFilterDateTime(), pageRequest);

        List<UserPollVoteHistory> votes = new ArrayList<>();
        if (user != null) {
            List<Long> pollIds = polls.stream().map(poll -> {return poll.id;}).collect(Collectors.toList());
           votes = userPollVoteHistoryRepository.findAllByUserIdAndPollIds(user.id, pollIds);
        }

        return PollMapper.pollsAndVotesTODTO(polls, votes);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void savePoll(@RequestBody Poll poll) {
        pollRepository.save(poll);
    }

    @PutMapping()
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updatePoll(@RequestBody Poll poll) {
        pollRepository.save(poll);
    }

    //cast vote on poll
    //idempotent create/update of a user vote
    @PutMapping(value="/vote")
    @ResponseStatus(HttpStatus.CREATED)
    public UserPollVoteDTO voteOnPoll(@RequestBody() UserPollVoteDTO userPollVoteDTO) {

        User user = securityService.getAuthenticatedUser();
        Poll pollVotedOn = pollRepository.findById(userPollVoteDTO.pollId).orElseThrow(ResourceNotFoundException::new);
        UserPollVoteHistory userVote = userPollVoteHistoryRepository.findByUserIdAndPollId(user.id, userPollVoteDTO.pollId);

        if(userVote != null) {
            pollVotedOn.decrementOptionVoteCount(userVote.optionIndex);
            userVote.optionIndex = userPollVoteDTO.optionIndex;

        } else {
            userVote = new UserPollVoteHistory(user, pollVotedOn, userPollVoteDTO.optionIndex);
        }

        pollVotedOn.incrementOptionVoteCount(userPollVoteDTO.optionIndex);
        pollRepository.save(pollVotedOn);

        //add this vote to history
        userPollVoteHistoryRepository.save(userVote);
        return PollMapper.userVoteToUserVoteDTO(userVote);
    }


    @DeleteMapping(value="/vote/{userVoteId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void removeVoteOnPoll(@PathVariable("userVoteId") Long userVoteId) {

        User user = securityService.getAuthenticatedUser();

        UserPollVoteHistory userVote = userPollVoteHistoryRepository.findById(userVoteId).orElseThrow(ResourceNotFoundException::new);

        //if the user of the request does not match the user of the vote being deleted throw unauthorized
        if(!Objects.equals(userVote.user.id, user.id)) {
            throw new UnauthorizedException();
        }

        Poll pollVotedOn = pollRepository.findById(userVote.poll.id).orElseThrow(ResourceNotFoundException::new);
        pollVotedOn.decrementOptionVoteCount(userVote.optionIndex);

        pollRepository.save(pollVotedOn);
        userPollVoteHistoryRepository.delete(userVote);

    }

}
