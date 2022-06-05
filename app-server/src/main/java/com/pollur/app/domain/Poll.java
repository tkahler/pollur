package com.pollur.app.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Entity
public class Poll extends DateAudit{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    public User user;


    @JsonProperty("title")
    public String title;

    @JsonProperty("optionValues")
    @ElementCollection
    public List<String> optionValues;

    @JsonProperty("optionVotes")
    @ElementCollection
    public List<Long> optionVotes;

    //popularity defined as total number of votes on poll
    private Long popularity;

    public Long commentCount;

    public Poll() {}

    public Poll(String title, List<String> optionValues, List<Long> optionVotes) {
        this.title = title;
        this.optionValues = optionValues;
        this.optionVotes = optionVotes;
    }

    public static Poll generateRandomPoll(User user) {
        Poll poll = new Poll();
        poll.title = "Random poll title by user " + user.id;
        poll.optionVotes = new ArrayList<>();
        poll.optionValues = new ArrayList<>();
        for (int i=1; i < 5; i++) {
            Long randomVotes = (long) (1L + (Math.random() * (1000L - 1L)));

            poll.optionValues.add("Poll option " + i);
            poll.optionVotes.add(randomVotes);
        }
        poll.setPopularity();
        poll.user = user;

        return poll;
    }

    public void incrementOptionVoteCount(int optionIndex) {
        this.optionVotes.set(optionIndex, this.optionVotes.get(optionIndex) + 1);
        this.setPopularity();
    }


    public void decrementOptionVoteCount(int optionIndex) {
        this.optionVotes.set(optionIndex, this.optionVotes.get(optionIndex) - 1);
        this.setPopularity();
    }

    public void incrementCommentCount() {
        this.commentCount += 1;
    }

    public void decrementCommentCount() {
        this.commentCount -= 1;
    }

    public Long setPopularity() {
        Long totalOptionVotes = 0L;
        for(Long optionVote: this.optionVotes) {
            totalOptionVotes += optionVote;
        }

        this.popularity = totalOptionVotes;
        return this.popularity;
    }

    public Long getPopularity() {
        return this.popularity;
    }
}

