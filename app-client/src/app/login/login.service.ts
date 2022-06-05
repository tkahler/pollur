import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Basic ' + btoa(username + ':' + password),
      }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>('/api/login', {}, httpOptions);
  }
}
