import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollCreatorComponent} from "./poll/poll-creator/poll-creator.component";
import {PollViewerComponent} from "./poll/poll-viewer/poll-viewer.component";


const routes: Routes = [
  {path: 'create-poll' , component: PollCreatorComponent},
  {path: 'home' , component: PollViewerComponent},
  {path: '' , component: PollViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
