package com.peakanime.app.repository;

import com.peakanime.app.domain.ThreadReply;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ThreadReplyRepository extends CrudRepository<ThreadReply, Long> {
    @Query("SELECT reply FROM ThreadReply reply WHERE reply.pollThreadId.id= :threadId")
    List<ThreadReply> findAllByThreadId(long threadId);
}
