package com.peakanime.app.resource;

import com.peakanime.app.domain.PollThread;
import com.peakanime.app.domain.ThreadReply;
import com.peakanime.app.domain.User;
import com.peakanime.app.repository.PollThreadRepository;
import com.peakanime.app.repository.ThreadReplyRepository;
import com.peakanime.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/thread")
public class ThreadResource {

    @Autowired
    ThreadReplyRepository threadReplyRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PollThreadRepository pollThreadRepository;

    @GetMapping("/{id}")
    public ThreadReply getThread(@PathVariable Long id) {
        ThreadReply threadReplies = threadReplyRepository.findById(id).get();
        return threadReplies;
    }

    @PutMapping("/new")
    public PollThread createThread() {
        PollThread pollThread = new PollThread();
        ThreadReply rootReply = new ThreadReply(pollThread, null,"This is root node", null);
        pollThread.rootReply = rootReply;
        pollThread.rootReply.replyChildrenIds = new ArrayList<>();
        pollThreadRepository.save(pollThread);

        return pollThread;
    }

    @GetMapping("/{threadId}")
    public List<ThreadReply> getAllTheadReplies(@PathVariable long threadId) {
        List<ThreadReply> allReplies = threadReplyRepository.findAllByThreadId(threadId);
        PollThread pollThread = pollThreadRepository.findById(threadId).get();
        allReplies.add(0, pollThread.rootReply);
        return allReplies;
    }

    @GetMapping("/all")
    public List<PollThread> getAllTheadReplies() {
        List<PollThread> allPollThreads = (List<PollThread>) pollThreadRepository.findAll();
        return allPollThreads;
    }

    @PutMapping("/reply/new/{parentId}")
    public ThreadReply createReply(ThreadReply threadReply, @PathVariable long parentId) {
        ThreadReply parentReply = threadReplyRepository.findById(parentId).get();
        threadReplyRepository.save(threadReply);

        parentReply.replyChildrenIds.add(threadReply.id);
        threadReplyRepository.save(parentReply);

        return threadReply;
    }
}
