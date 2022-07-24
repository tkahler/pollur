import {Component, Input, OnChanges} from '@angular/core';
import {PollService} from '../poll.service';
import {Poll} from '../../models/poll';


@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css', '../../app.component.css'],
  providers: [PollService]
})
export class PollListComponent implements OnChanges{
  public pollList: Array<Poll>;

  @Input()
  username: string;

  @Input()
  minimized: boolean;

  constructor(private pollService: PollService) {
    this.pollService.pollListFilter.reset();
    this.minimized = false;
    this.pollList = this.pollService.pollList;

  }

  ngOnChanges() {
    this.pollService.pollListFilter.author = this.username;
    this.pollService.refreshPollList().subscribe(() => {});
  }

  loadNextPage() {
    this.pollService.pollListFilter.incrementPage();
    this.pollService.updatePollList().subscribe(() => {});
  }


}
