package com.pollur.app.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    public Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="poll_id")
    public Poll poll;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    public User user;

    public String content;

    @CreatedDate
    private LocalDateTime createdDateTime;
    @LastModifiedDate
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    @JsonProperty("parent")
    public Comment parent;

    public int depth;



    public Comment getParent() {
        return parent;
    }

    public void setParent(Comment parent) {
        this.parent = parent;
    }

    public Comment() {}

    public Comment(Long pollId, User user, String content, Long parentId, int depth) {
        this.poll = new Poll();
        this.poll.id = pollId;

        this.user = user;

        this.content = content;

        this.parent = new Comment();
        this.parent.id = parentId;

        this.depth = depth;
    }

}

