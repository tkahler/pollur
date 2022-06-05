import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PollService} from '../poll.service';
import {Poll} from '../../models/poll';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css', '../../app.component.css'],
  providers: [PollService]
})

export class PollContainerComponent implements  OnInit{

  public poll: Poll;

  constructor(private routes: ActivatedRoute, private pollService: PollService) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
      const pollId = params.get('pollId');
      this.pollService.getPoll(pollId).subscribe(poll => {
        this.poll = poll;
      });
    });
  }
}
