import {Component, Input} from '@angular/core';
import {PollFilter} from '../../models/poll-filter';
import {PollService} from '../poll.service';

@Component({
  selector: 'app-poll-list-filter',
  template:
    `<div class="bg-white p-2 rounded d-flex justify-content-between flex-row">
      <mat-chip-list *ngIf="username !== undefined">
        <mat-chip [selected]="this.pollFilter.author !== undefined" color="primary" (click)="setAuthor()">
          Authored Polls
        </mat-chip>
        <mat-chip [selected]="this.pollFilter.participatedBy !== undefined" color="primary" (click)="setParticipatedBy()">
          Poll Participant
        </mat-chip>
      </mat-chip-list>

      <mat-chip-list aria-label="Fish selection">
        <mat-chip [selected]="this.pollFilter.sortBy === 'New'" color="primary" (click)="setSortBy('New')">
          <mdb-icon class="mr-1" fas icon="certificate"></mdb-icon>New
        </mat-chip>
        <mat-chip [selected]="this.pollFilter.sortBy === 'Top'" color="primary" (click)="setSortBy('Top')">
          <mdb-icon class="mr-1" fas icon="fire"></mdb-icon>Top
        </mat-chip>
        <mat-chip [matMenuTriggerFor]="menu" *ngIf="this.pollFilter.sortBy === 'Top'">
          {{this.pollFilter.timeFilter}}
          <mdb-icon class="ml-1" fas icon="chevron-down"></mdb-icon>
        </mat-chip>
        <mat-menu #menu="matMenu">
          <button class="outline-none" *ngFor="let filterOption of this.pollFilter.timeFilterOptions" mat-menu-item
                  (click)="setTimeFilter(filterOption)">{{filterOption}}</button>
        </mat-menu>

      </mat-chip-list>
    </div>`

})
export class PollListFilterComponent {
  pollFilter: PollFilter;

  @Input()
  username: string;

  constructor(private pollService: PollService) {
    this.pollFilter = pollService.getListFilter();
  }

  setSortBy(sortBy: string) {
    this.pollFilter.setSortBy(sortBy);
    this.pollService.refreshPollList().subscribe();
  }

  setTimeFilter(timeFilter: string) {
    this.pollFilter.timeFilter = timeFilter;
    this.pollService.refreshPollList().subscribe();
  }

  setAuthor() {
    this.pollFilter.participatedBy = undefined;
    this.pollFilter.author = this.username;
    this.pollService.refreshPollList().subscribe();
  }

  setParticipatedBy() {
    this.pollFilter.author = undefined;
    this.pollFilter.participatedBy = this.username;
    this.pollService.refreshPollList().subscribe();

  }

}
