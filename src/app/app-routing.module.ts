import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentTileComponent } from './comment-tile/comment-tile.component';
import { CommentComponent } from './comment/comment.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  {path:'homedetails',component:HomeDetailsComponent},
  {path:'commenttile',component:CommentTileComponent},
  {path:'comment',component:CommentComponent},
  {path:'',redirectTo:'/homedetails',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
