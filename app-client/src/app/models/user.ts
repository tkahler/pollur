import {Deserializable} from '../shared/deserialize';
import {Poll} from './poll';

export class User implements Deserializable{
  public username: string;
  public id: string;

  constructor() {

  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }


}
