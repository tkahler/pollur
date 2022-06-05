import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {Auth} from '../models/auth';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<User>('/api/user', httpOptions).pipe(
      map(data => new User().deserialize(data))
    );
  }

  createUser(authData: Auth) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>('/api/user', authData, httpOptions).pipe(
      map(data => new User().deserialize(data))
    );
  }

}
