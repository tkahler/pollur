package com.pollur.app.repository;

import com.pollur.app.domain.Poll;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface PollRepository extends PagingAndSortingRepository<Poll, Long> {

    //returns all polls created after the passed dateTime
    List<Poll> findByCreatedDateTimeGreaterThan(LocalDateTime dateTime, Pageable pageable);

}
