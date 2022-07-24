package com.pollur.app.domain.poll;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pollur.app.domain.DateAudit;
import com.pollur.app.domain.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
public class Poll extends DateAudit {


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

    @OneToMany(mappedBy = "poll", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<UserPollVoteHistory> userVotes;

    public Poll() {}

    public Poll(String title, List<String> optionValues, User user) {
        this.title = title;
        this.optionValues = optionValues;

        //votes are zeroed out when poll is initially created
        this.optionVotes = optionValues.stream().map((s) -> {return 0L;}).collect(Collectors.toList());
        this.user = user;
        this.setPopularity();
    }

    public static Poll generateRandomPoll(User user) {
        Poll poll = new Poll();
        poll.title = "this is the title of the poll " + (int) (Math.random() * (1000));
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

    public boolean validatePoll() {
        boolean isValid = this.optionVotes.size() == this.optionValues.size();;

        //all posts should have at least 2 options but no more than 6
        isValid = isValid && this.optionValues.size() >= 2 && this.optionValues.size() <= 6;


        //all options should have content
        for(String optionValue: this.optionValues) {
            isValid = isValid && !optionValue.equals("");
        }

        //title should have content
        isValid = isValid && !this.title.equals("");

        return isValid;

    }
}

