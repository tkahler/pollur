package com.pollur.app.domain.dto;

import java.util.List;

public class PollDTO {

    public Long id;
    public UserDTO author;
    public String title;
    public List<String> optionValues;
    public List<Long> optionVotes;
    public Long popularity;
    public Long commentCount;
    public UserPollVoteDTO userPollVote;

    public String createdDateTime;
}
