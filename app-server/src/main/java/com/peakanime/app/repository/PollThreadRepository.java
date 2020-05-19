package com.peakanime.app.repository;

import com.peakanime.app.domain.PollThread;
import com.peakanime.app.domain.ThreadReply;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PollThreadRepository extends CrudRepository<PollThread, Long> {

}
