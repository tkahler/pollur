import {Deserializable} from '../shared/deserialize';

export class PollVote implements Deserializable {
  public id: string;
  public pollId: string;
  public optionIndex: number;

  constructor() {
  }

  static copy(pollVote: PollVote): PollVote {
    const newPollVote = new PollVote();
    newPollVote.id = pollVote.id;
    newPollVote.pollId = pollVote.pollId;
    newPollVote.optionIndex = pollVote.optionIndex;
    return newPollVote;
  }

  reset() {
    this.id = null;
    this.optionIndex = -1;
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
