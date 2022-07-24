import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css', '../app.component.css'],
})
export class UserProfileComponent implements OnInit {

  public username: string;
  constructor(private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
       this.username = params.get('username');
    });
  }

}
