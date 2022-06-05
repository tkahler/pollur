import {Component} from '@angular/core';
import {Poll} from '../../models/poll';
import {PollService} from '../poll.service';

@Component({
  selector: 'app-poll-creator',
  templateUrl: './poll-creator.component.html',
  styleUrls: ['./poll-creator.component.css', '../../app.component.css'],
  providers: [PollService]
})

export class PollCreatorComponent {
  public poll: Poll = null;

  constructor(private pollService: PollService) {
    this.poll = new Poll();
  }

  onAddOption() {
    this.poll.optionValues.push('');
    this.poll.optionVotes.push(0);
  }

  onSavePoll() {
    this.pollService.savePoll(this.poll).subscribe(poll => console.log(poll));
  }

  trackByFn(index, item) {
    return item.name;
  }
}


