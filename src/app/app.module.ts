import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentTileComponent } from './comment-tile/comment-tile.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentTileComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
