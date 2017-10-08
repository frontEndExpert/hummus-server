import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent{
  title: string = 'Simon\'s Pattaya Hummus Laboratory';
  lat: number = 12.932787;
  lng: number = 100.886983;
}
