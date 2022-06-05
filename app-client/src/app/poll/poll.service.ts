import { Injectable } from '@angular/core';
import {Poll} from '../models/poll';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PollVote} from '../models/poll-vote';
import {map} from 'rxjs/operators';


@Injectable()
export class PollService {

  constructor(private http: HttpClient) { }

  getPoll(pollId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<Poll>('/api/poll/' + pollId, httpOptions).pipe(
      map(data => new Poll().deserialize(data))
    );
  }

  getPollsByPage(page: number): Observable<Array<Poll>>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const pageParam = 'page=' + page;
    const timeFilter = 't=' + 'YEAR';
    const queryParams = pageParam + '&' + timeFilter;

    return this.http.get<Array<Poll>>( '/api/poll?' + queryParams, httpOptions).pipe(
      map(dataList => dataList.map(data => new Poll().deserialize(data))
    ));
  }

  savePoll(poll: Poll): Observable<Poll> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Poll>('/api/poll/save', poll, httpOptions).pipe(
      map(data => new Poll().deserialize(data))
    );

  }

  voteOnPoll(pollVote: PollVote): Observable<PollVote>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<PollVote>('/api/poll/vote', pollVote, httpOptions).pipe(
      map(data => new PollVote().deserialize(data))
    );
  }

  removeVoteOnPoll(pollVote: PollVote) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete( '/api/poll/vote/' + pollVote.id, httpOptions);
  }

  getUserVote(pollId: string): Observable<PollVote>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<PollVote>( '/api/poll/' + pollId + '/vote/', httpOptions).pipe(
      map(data => new PollVote().deserialize(data))
    );;
  }

}
