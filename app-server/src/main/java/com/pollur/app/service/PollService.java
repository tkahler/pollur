package com.pollur.app.service;


import com.pollur.app.domain.poll.Poll;
import com.pollur.app.domain.User;
import com.pollur.app.domain.poll.UserPollVoteHistory;
import com.pollur.app.domain.dto.PollDTO;
import com.pollur.app.domain.exception.ValidationException;
import com.pollur.app.mapper.PollMapper;
import com.pollur.app.repository.PollRepository;
import com.pollur.app.repository.UserPollVoteHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PollService {

    @Autowired
    PollRepository pollRepository;

    @Autowired
    UserPollVoteHistoryRepository userPollVoteHistoryRepository;

    public PollDTO createPoll(User user, PollDTO pollDTO) {
        Poll poll = new Poll(pollDTO.title, pollDTO.optionValues, user);

        if(!poll.validatePoll()) {
            throw new ValidationException();
        }

        poll = pollRepository.save(poll);
        return PollMapper.pollAndVoteToDTO(poll, null);

    }


    public UserPollVoteHistory getUserVote(Long userId, Long pollId) {
        return  userPollVoteHistoryRepository.findByUserIdAndPollId(userId, pollId);
    }


}
