import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  imageSrc:string="/assets/comment.png";

  constructor() { }

  ngOnInit() {
  }

  private toggleImage(identifier:number):void{
    if(identifier == 1)
      this.imageSrc = "/assets/comment.png";
    else if(identifier == 2)
      this.imageSrc = "/assets/comment-tile.png";
    
  }

}
