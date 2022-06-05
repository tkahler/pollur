package com.pollur.app.repository;

import com.pollur.app.domain.Comment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {

    @Query("SELECT comment FROM Comment comment WHERE comment.poll.id= :pollId and comment.depth <=:depth")
    List<Comment> findAllByPollId(Long pollId, int depth);

    @Query("SELECT comment FROM Comment comment WHERE comment.poll.id =:pollId and comment.parent.id <=:parentId")
    List<Comment> findAllByParentId(Long pollId, Long parentId);
}
