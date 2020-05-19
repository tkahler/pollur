import {Component} from '@angular/core';
import {Poll} from "../../domain/poll";

import {PollService} from "../poll.service";
import * as pollConstants from "../../constants";

@Component({
  selector: 'app-poll-viewer',
  templateUrl: './poll-viewer.component.html',
  styleUrls: ['./poll-viewer.component.css', '../../app.component.css'],
  providers: [PollService]
})

export class PollViewerComponent {
  public poll: Poll = null;
  public typeIsCheckBox: boolean =  true;
  public CHECKBOX: string = pollConstants.CHECKBOX;
  public RADIO: string = pollConstants.RADIO;
  public votes: boolean[]=[];
  public votePct: string[]=[];

  constructor(private pollCreatorService: PollService) {
    this.poll = Poll.defaultConstructor();
    this.poll.optionValues.push("fasasdfasdf");
    this.poll.optionVotes.push(5);
    this.poll.optionValues.push("dfsadfasf");
    this.poll.optionVotes.push(9);

    this.poll.title = "Who would win favorite char??";
    this.poll.type = pollConstants.CHECKBOX;

    this.setVotePercentages();
    //all options have not votes initially
    for(let i = 0; i < this.poll.optionVotes.length; i++) {
      this.votes[i] = false;
    }
  }

  setVotePercentages(){
    let totalVotes = 0;
    this.poll.optionVotes.forEach((vote) => {totalVotes += vote});
    this.votePct = this.poll.optionVotes.map(vote => {
      let voteStr = ((vote / totalVotes) * 100).toString().substr(0,2) + "%";
      if(voteStr[1] == '.') {
        voteStr = voteStr.replace('.', "");
      }
      return voteStr

    });
  }

  onOptionSelected(i) {
    this.votes[i] = !this.votes[i];
    if (this.votes[i]) {
      this.poll.optionVotes[i]++;
    } else {
      this.poll.optionVotes[i]--;
    }
    this.setVotePercentages();
  }

  onSaveAnswer() {
    this.pollCreatorService.voteOnPoll(this.poll.id, this.votes).subscribe(poll => console.log(poll));;
  }

  trackByFn(index, item) {
    return item.value;
  }

  noClick(e) {
    e.preventDefault();
  }
}


