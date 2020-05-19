package com.peakanime.app.resource;

import com.peakanime.app.constants.PollConstants;
import com.peakanime.app.domain.Poll;
import com.peakanime.app.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poll")
@CrossOrigin
public class PollResource {

    @Autowired
    PollRepository pollRepository;

    @GetMapping("/{id}")
    public List<Poll> getPollById(@PathVariable Long id) {
        //exception to status code
        List<Poll> poll = (List<Poll>) pollRepository.findAll();
        return poll;
    }

    @PostMapping(value="/save", headers="Accept=application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public void savePoll(@RequestBody Poll poll) {
        pollRepository.save(poll);
    }

    @PostMapping(value="/{id}/vote")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void voteOnPoll(@RequestBody() List<Boolean> votes, @PathVariable Long id) {
        Poll pollVotedOn = pollRepository.findById(id).get();
        String pollType = pollVotedOn.optionType;
        for (int optionIndex = 0; optionIndex < votes.size(); optionIndex++) {
            //if the option was voted then increment the votes
            if(votes.get(optionIndex)) {
                int optionVotesWithIncrement = pollVotedOn.optionVotes.get(optionIndex) + 1;
                pollVotedOn.optionVotes.set(optionIndex, optionVotesWithIncrement);
                //on single option can be selected for radio
                if(pollType.equals(PollConstants.TYPE_RADIO)) {
                    break;
                }
            }
        }
        pollRepository.save(pollVotedOn);
    }
}
