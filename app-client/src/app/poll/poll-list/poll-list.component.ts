import {Component} from '@angular/core';
import {PollService} from '../poll.service';
import {Poll} from '../../models/poll';


@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css', '../../app.component.css'],
  providers: [PollService]
})
export class PollListComponent {
  public pollList: Array<Poll> = [];

  constructor(private pollService: PollService) {
    this.pollService.getPollsByPage(1).subscribe(pollList => {
      this.pollList = pollList;
    });
  }


}
