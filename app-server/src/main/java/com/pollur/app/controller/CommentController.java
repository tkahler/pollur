package com.pollur.app.controller;

import com.pollur.app.domain.Comment;
import com.pollur.app.domain.User;
import com.pollur.app.domain.dto.CommentDTO;
import com.pollur.app.domain.exception.ResourceNotFoundException;
import com.pollur.app.repository.PollRepository;
import com.pollur.app.repository.CommentRepository;
import com.pollur.app.repository.UserRepository;
import com.pollur.app.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poll/{pollId}")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PollRepository pollRepository;

    @Autowired
    SecurityService securityService;



    @GetMapping("/comments")
    public List<Comment> getAllPollComments(@PathVariable("pollId") Long pollId, @RequestParam("depth") int depth) {
        return commentRepository.findAllByPollId(pollId, depth);
    }

    @GetMapping("/comment/{commentId}/children")
    public List<Comment> getAllChildComments(@PathVariable("pollId") Long pollId, @PathVariable("commentId") Long commentId) {
        return commentRepository.findAllByParentId(pollId, commentId);
    }

    //a reply is any comment in the thread that is at a depth of >= 1, a reply always has a parent comment
    @PostMapping("/reply")
    public CommentDTO reply(@PathVariable("pollId") Long pollId, CommentDTO replyDTO) {
        Comment parentReply = commentRepository.findById(replyDTO.parentCommentId).orElseThrow(ResourceNotFoundException::new);
        User user = securityService.getAuthenticatedUser();

        Comment comment = new Comment(replyDTO.pollId, user, replyDTO.content, replyDTO.parentCommentId, parentReply.depth + 1);
        comment.poll.incrementCommentCount();

        comment = commentRepository.save(comment);
        pollRepository.save(comment.poll);

        return new CommentDTO(comment.id, comment.poll.id, comment.parent.id, comment.content);

    }

    //create a root level comment, depth=0 with no parent comment
    @PostMapping("/comment")
    public CommentDTO comment(@PathVariable("pollId") Long pollId, CommentDTO commentDTO) {
        User user = securityService.getAuthenticatedUser();

        Comment comment = new Comment(commentDTO.pollId, user, commentDTO.content, null, 0);
        comment.poll.incrementCommentCount();

        pollRepository.save(comment.poll);
        comment = commentRepository.save(comment);

        return new CommentDTO(comment.id, comment.poll.id, comment.parent.id, comment.content);
    }
}
