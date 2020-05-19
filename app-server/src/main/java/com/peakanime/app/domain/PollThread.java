package com.peakanime.app.domain;

import javax.persistence.*;

@Entity
public class PollThread {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @OneToOne(cascade = CascadeType.ALL)
    public ThreadReply rootReply;

    public PollThread() {

    }


}
