import * as pollConstants from '../constants';
import {PollVote} from './poll-vote';
import {Deserializable} from '../shared/deserialize';
import {User} from './user';

export class Poll implements Deserializable {
  public title: string;
  public optionValues: string[] = [];
  public optionVotes: number[] = [];
  public type: string = pollConstants.RADIO;
  public id: string;
  public userPollVote: PollVote;
  public author: User;

  constructor() {
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.userPollVote = new PollVote().deserialize(input.userPollVote);
    this.author = new User().deserialize(input.author);
    return this;
  }



}
