import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentTileComponent } from './comment-tile/comment-tile.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path:'commenttile',component:CommentTileComponent},
  {path:'comment',component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
