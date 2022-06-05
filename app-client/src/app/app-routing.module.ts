import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollCreatorComponent} from './poll/poll-creator/poll-creator.component';
import {PollCardComponent} from './poll/poll-card/poll-card.component';
import {PollListComponent} from './poll/poll-list/poll-list.component';


const routes: Routes = [
  {path: 'create-poll' , component: PollCreatorComponent},
  {path: 'home' , component: PollListComponent},
  {path: '' , component: PollListComponent},
  {path: 'poll', component: PollCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
