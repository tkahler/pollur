import { Injectable } from '@angular/core';
import {Poll} from '../models/poll';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PollVote} from '../models/poll-vote';
import {map} from 'rxjs/operators';
import {PollFilter} from '../models/poll-filter';


@Injectable()
export class PollService {

  pollListFilter: PollFilter;
  public pollList: Array<Poll> = [];

  constructor(private http: HttpClient) {
    this.pollListFilter = new PollFilter();
  }

  getListFilter() {
    return this.pollListFilter;
  }

  getPoll(pollId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<Poll>('/api/poll/' + pollId, httpOptions).pipe(
      map(data => new Poll().deserialize(data))
    );
  }

  // adds to poll list using current filter
  updatePollList(): Observable<Array<Poll>>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const pageParam = 'page=' + this.pollListFilter.page;

    let timeFilter = '';
    if (this.pollListFilter.timeFilter !== null) {
      timeFilter = 't=' + this.pollListFilter.timeFilter.toUpperCase();
    }


    const sortBy = 'sortBy=' + this.pollListFilter.sortBy.toUpperCase();
    let queryParams = pageParam + '&' + timeFilter + '&' + sortBy;

    if (this.pollListFilter.author){
      queryParams = queryParams + '&author=' + this.pollListFilter.author;
    } else if (this.pollListFilter.participatedBy) {
      queryParams = queryParams + '&participatedBy=' + this.pollListFilter.participatedBy;
    }

    return this.http.get<Array<Poll>>( '/api/poll?' + queryParams, httpOptions).pipe(
      map(dataList => dataList.map(data => {
        const poll = new Poll().deserialize(data);
        this.pollList.push(poll);
        return poll;
      })
    ));
  }

  refreshPollList() {
    this.pollListFilter.page = 1;
    this.pollList.length = 0;
    return this.updatePollList();
  }

  createPoll(poll: Poll): Observable<Poll> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Poll>('/api/poll', poll, httpOptions).pipe(
      map(data => new Poll().deserialize(data))
    );

  }

  voteOnPoll(pollVote: PollVote): Observable<PollVote>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<PollVote>('/api/poll/vote', pollVote, httpOptions).pipe(
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
    );
  }

}
