import * as pollConstants from "../constants";

export class Poll {
  public title: string = "";
  public optionValues: String[] = [];
  public optionVotes: number[] = [];
  public type: string = pollConstants.CHECKBOX;
  public id: string = "";

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public static defaultConstructor() {
    return new Poll({
      id:"",
      value: "",
      optionValues:[""],
      optionVotes:[0],
      type:pollConstants.CHECKBOX
    });
  }
}
