package com.pollur.app.domain.dto;

public class UserPollVoteDTO {
    public Long id;
    public Long pollId;
    public int optionIndex;

    public UserPollVoteDTO() {

    }

    public UserPollVoteDTO(Long id, Long pollId, int optionIndex) {
        this.id = id;
        this.pollId = pollId;
        this.optionIndex = optionIndex;
    }

    public UserPollVoteDTO(int optionIndex) {
        this.optionIndex = optionIndex;
    }
}

