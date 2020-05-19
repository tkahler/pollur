package com.peakanime.app.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class Poll {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @JsonProperty("title")
    public String title;

    @JsonProperty("optionValues")
    @ElementCollection
    public List<String> optionValues;

    @JsonProperty("optionVotes")
    @ElementCollection
    public List<Integer> optionVotes;

    @JsonProperty("type")
    public String optionType;

    @OneToOne
    public PollThread pollThread;

    public Poll() {}

    public Poll(String title, List<String> optionValues, List<Integer> optionVotes) {
        this.title = title;
        this.optionValues = optionValues;
        this.optionVotes = optionVotes;
    }
}

