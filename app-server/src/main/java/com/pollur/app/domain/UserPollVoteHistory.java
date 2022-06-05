package com.pollur.app.domain;

import javax.persistence.*;

@Entity
public class UserPollVoteHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    public User user;

    @ManyToOne
    @JoinColumn(name="poll_id")
    public Poll poll;

    //the option index the user voted on
    public int optionIndex;

    public UserPollVoteHistory() {

    }

    public UserPollVoteHistory(User user, Poll poll, int optionIndex) {
        this.user = user;

        this.poll = poll;
        this.optionIndex = optionIndex;
    }
}
