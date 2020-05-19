package com.peakanime.app.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
public class ThreadReply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    public long id;

    @ManyToOne
    private PollThread pollThreadId;

    @JsonProperty("user")
    @ManyToOne(cascade = CascadeType.ALL)
    public User user;

    @JsonProperty("replyContent")
    public String replyContent;

    @JsonProperty("createdDateTime")
    public LocalDateTime createdDateTime = LocalDateTime.now();

    @JsonProperty("replyChildren")
    @ElementCollection
    public List<Long> replyChildrenIds;

    public ThreadReply() {}

    public ThreadReply(PollThread pollThreadId, User user, String replyContent, List<Long> replyChildrenIds) {
        this.pollThreadId = pollThreadId;
        this.user = user;
        this.replyContent = replyContent;
        this.replyChildrenIds = replyChildrenIds;
    }

}

