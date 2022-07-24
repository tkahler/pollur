import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollCreatorComponent} from './poll/poll-creator/poll-creator.component';
import {PollCardComponent} from './poll/poll-card/poll-card.component';
import {PollListComponent} from './poll/poll-list/poll-list.component';
import {UserProfileComponent} from './profile/user-profile.component';
import {PollContainerComponent} from './poll/poll-container/poll-container.component';
import {PollListContainerComponent} from './poll/poll-list/poll-list-container.component';


const routes: Routes = [
  {path: 'create-poll' , component: PollCreatorComponent},
  {path: 'discover' , component: PollListContainerComponent},
  {path: '' , component: PollListContainerComponent},
  {path: 'poll', component: PollCardComponent},
  {path: 'user/:username', component: UserProfileComponent},
  {path: 'poll/:pollId', component: PollContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
