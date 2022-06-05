import {Component, Input, OnChanges} from '@angular/core';
import {Poll} from '../../models/poll';

import {PollService} from '../poll.service';
import {PollVote} from '../../models/poll-vote';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../shared/modal.service';
import {LoginComponent} from '../../login/login.component';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.css', '../../app.component.css'],
  providers: [PollService]
})

export class PollCardComponent implements OnChanges {
  @Input()
  public poll: Poll;

  public votePct: number[] = [];
  public userVote: PollVote;

  constructor(private pollService: PollService, private routes: ActivatedRoute, private modalService: ModalService) {
  }

  ngOnChanges() {
    this.userVote = PollVote.copy(this.poll.userPollVote);
    this.userVote.pollId = this.poll.id;

    this.setVotePercentages();
  }


  setVotePercentages(){
    let totalVotes = 0;
    this.poll.optionVotes.forEach((vote) => {totalVotes += vote; });
    this.votePct = this.poll.optionVotes.map(vote => {
      return Math.round((vote / totalVotes) * 100);

    });
  }

  onOptionSelected(i) {
    this.userVote.optionIndex = i;
  }

  onVote() {
    this.pollService.voteOnPoll(this.userVote).subscribe(pollVote => {
      this.poll.userPollVote = PollVote.copy(pollVote);
      this.userVote = PollVote.copy(pollVote);

      this.poll.optionVotes[this.poll.userPollVote.optionIndex]++;
      this.setVotePercentages();

    }, error => {
      if (error.status === 401) {
        this.modalService.open(LoginComponent.modalId);
      }
    });
  }


  removeVote() {
    this.pollService.removeVoteOnPoll(this.poll.userPollVote).subscribe((res) => {
      this.poll.optionVotes[this.poll.userPollVote.optionIndex]--;
      this.setVotePercentages();

      this.poll.userPollVote.reset();
      this.userVote.reset();
    });

  }

  trackByFn(index, item) {
    return item.value;
  }

  noClick(e) {
    e.preventDefault();
  }
}


