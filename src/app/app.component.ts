import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: {title:string,imageUrl:string,content:string}[]=[{title:"Turquoise Water",imageUrl:"assets/beach.jpg",content:"Turquoise Water deep in the ocean with seaweed"},
  {title:"Fall Colours",imageUrl:"assets/fallColours.jpg",content:"Fall Colours and falling leaves from trees"},
  {title:"WaterFall",imageUrl:"assets/waterfall.jpg",content:"Green mountains surrounded by waterfall"},]
}
