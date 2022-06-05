package com.pollur.app.mapper;

import com.pollur.app.domain.Poll;
import com.pollur.app.domain.UserPollVoteHistory;
import com.pollur.app.domain.dto.PollDTO;
import com.pollur.app.domain.dto.UserPollVoteDTO;

import java.util.*;

public class PollMapper {

    public static PollDTO pollAndVoteToDTO(Poll poll, UserPollVoteHistory userPollVoteHistory) {
        PollDTO pollDTO = new PollDTO();
        pollDTO.id = poll.id;
        pollDTO.author = UserMapper.userToDTO(poll.user);
        pollDTO.title = poll.title;
        pollDTO.optionVotes = new ArrayList<>(poll.optionVotes);
        pollDTO.optionValues = new ArrayList<>(poll.optionValues);
        pollDTO.popularity = poll.getPopularity();
        pollDTO.commentCount = poll.commentCount;

        if(userPollVoteHistory != null) {
            pollDTO.userPollVote = new UserPollVoteDTO(userPollVoteHistory.id, poll.id, userPollVoteHistory.optionIndex);
        } else {
            pollDTO.userPollVote = new UserPollVoteDTO( -1);
        }
        return pollDTO;
    }

    public static List<PollDTO> pollsAndVotesTODTO(List<Poll> polls, List<UserPollVoteHistory> votes) {
        List<PollDTO> pollDTOs = new ArrayList<>();

        Map<Long, UserPollVoteHistory> pollIdToVote = new HashMap<>();

        for (UserPollVoteHistory vote : votes) {
            pollIdToVote.put(vote.poll.id, vote);
        }

        for (Poll poll: polls) {
            PollDTO pollDTO;
            pollDTO = pollAndVoteToDTO(poll, pollIdToVote.getOrDefault(poll.id, null));
            pollDTOs.add(pollDTO);
        }
        return pollDTOs;
    }

    public static UserPollVoteDTO userVoteToUserVoteDTO(UserPollVoteHistory userPollVoteHistory) {
        return new UserPollVoteDTO(userPollVoteHistory.id, userPollVoteHistory.poll.id, userPollVoteHistory.optionIndex);
    }

}
