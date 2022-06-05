package com.pollur.app.repository;

import com.pollur.app.domain.UserPollVoteHistory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserPollVoteHistoryRepository extends CrudRepository<UserPollVoteHistory, Long> {

    @Query("SELECT voteHistory FROM UserPollVoteHistory voteHistory WHERE voteHistory.poll.id=:pollId and voteHistory.user.id=:userId")
    UserPollVoteHistory findByUserIdAndPollId(Long userId, Long pollId);


    @Query("SELECT voteHistory FROM UserPollVoteHistory voteHistory WHERE voteHistory.poll.id in :pollId and voteHistory.user.id=:userId")
    List<UserPollVoteHistory> findAllByUserIdAndPollIds(Long userId, List<Long> pollId);
}


