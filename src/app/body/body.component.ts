import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  constructor(meta: Meta, title: Title) { 
    title.setTitle('Simon\'s Pattaya Hummus Laboratory - Home Page');
    
        meta.addTags([
          { name: 'author',   content: 'Aylon Spigel'},
          { name: 'keywords', content: 'simon pattaya hummus laboratory, simon place, hummus pattaya, pattaya hummus, simon hummus laboratory, simon hummus lab '},
          { name: 'description', content: 'Simon\'s pattaya hummus laboratory is defiantly the best hummus in Thailand! A great middle east/Israeli restaurant.' }
        ]);
    
  }

}
