package com.pollur.app.domain.dto;

public class CommentDTO {
    public Long id;
    public Long pollId;
    public Long parentCommentId;
    public String content;

    public CommentDTO(Long id, Long pollId, Long parentCommentId, String content) {
        this.id = id;
        this.pollId = pollId;
        this.parentCommentId = parentCommentId;
        this.content = content;
    }


}
