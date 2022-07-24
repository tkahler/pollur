package com.pollur.app.repository;

import com.pollur.app.domain.poll.Poll;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

public interface PollRepository extends PagingAndSortingRepository<Poll, Long> {

    //returns all polls created after the passed dateTime
    @Query("select poll from Poll poll where poll.createdDateTime>= :dateTime")
    List<Poll> findByCreatedDateTimeGreaterThan(OffsetDateTime dateTime, Pageable pageable);

    @Query("select poll from Poll poll where poll.createdDateTime>= :dateTime and poll.user.username=:authorUsername")

    List<Poll> findByCreatedDateTimeAndAuthorUserId(String authorUsername, OffsetDateTime dateTime, Pageable pageable);

    @Query("SELECT poll FROM Poll poll join poll.userVotes pollVote where pollVote.user.username=:participatedUsername and poll.createdDateTime>=:minCreatedDateTime")
    List<Poll> findPollByVoteUserId(String participatedUsername, OffsetDateTime minCreatedDateTime, Pageable pageable);
}
