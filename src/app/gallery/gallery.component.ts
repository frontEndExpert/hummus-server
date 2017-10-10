import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('Simon\'s Pattaya Hummus Laboratory - Gallery');
    
        meta.addTags([
          { name: 'author',   content: 'Aylon Spigel'},
          { name: 'keywords', content: 'Gallery, simon pattaya hummus laboratory, simon place, hummus pattaya, pattaya hummus, simon hummus laboratory, simon hummus lab '},
          { name: 'description', content: 'Simon\'s pattaya hummus laboratory is defiantly the best hummus in Thailand! A great middle east/Israeli restaurant. Gallery of our food and location.' }
        ]);
    
  }

  ngOnInit() {
  }

}
