import {Component} from '@angular/core';
import {Poll} from '../../models/poll';
import {PollService} from '../poll.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poll-creator',
  templateUrl: './poll-creator.component.html',
  styleUrls: ['./poll-creator.component.css', '../../app.component.css'],
  providers: [PollService]
})

export class PollCreatorComponent {
  public poll: Poll = null;

  public pollValidationErrors = {title: '', options: ['', '', '', '', '', '']};

  constructor(private pollService: PollService, private router: Router) {
    this.poll = new Poll();
    // all polls should have at least 2 options
    this.poll.addOption('');
    this.poll.addOption('');

  }

  onAddOption() {
    this.poll.addOption('');
  }

  onRemoveOption(index: number) {
    this.poll.removeOptionByIndex(index);
  }

  onSavePoll() {
    if (this.validatePoll()) {
      this.pollService.createPoll(this.poll).subscribe(poll => {
        this.router.navigate(['/poll/' + poll.id]).then();
      });
    }
  }

  validatePoll() {
    // reset validation errors
    this.pollValidationErrors.title = '';
    this.pollValidationErrors.options.splice(0, this.pollValidationErrors.options.length);

    let isValid = true;
    if (!this.poll.title) {
      this.pollValidationErrors.title = 'Question cannot be empty';
      isValid = false;
    }

    this.poll.optionValues.forEach((val, index) => {
      if (!val) {
        this.pollValidationErrors.options[index] = 'Option cannot be empty';
        isValid = false;
      }
    });

    return isValid;
  }

  trackByFn(index, item) {
    return item.name;
  }
}


