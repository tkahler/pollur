import { Injectable } from '@angular/core';
import {Poll} from "../domain/poll";
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

const API_URL = environment.apiUrl;

@Injectable()
export class PollService {

  constructor(private http:HttpClient) { }

  savePoll(poll: Poll): Observable<Poll> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Poll>(API_URL + "/poll/save", poll, httpOptions);

  }

  voteOnPoll(pollId:string, votes:boolean[]) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(API_URL + "/poll/vote/" + pollId, votes, httpOptions);
  }
}
