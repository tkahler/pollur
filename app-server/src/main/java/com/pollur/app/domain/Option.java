package com.pollur.app.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Option {
    @JsonProperty("value")
    public String value;

    @JsonProperty("votes")
    public int votes;

    public Option(String value, int votes) {
        this.value = value;
        this.votes = votes;
    }
}
