import {Component} from '@angular/core';

@Component({
  selector: 'app-poll-list-container',
  template:
    `<div>
      <app-poll-list [minimized]="false"></app-poll-list>
    </div>`

})
export class PollListContainerComponent {}
