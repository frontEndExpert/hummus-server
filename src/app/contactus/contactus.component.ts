import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('Simon\'s Pattaya Hummus Laboratory - Contact Us');
    
        meta.addTags([
          { name: 'author',   content: 'Aylon Spigel'},
          { name: 'keywords', content: 'contact us, simon pattaya hummus laboratory, simon place, hummus pattaya, pattaya hummus, simon hummus laboratory, simon hummus lab '},
          { name: 'description', content: 'Simon\'s pattaya hummus laboratory is defiantly the best hummus in Thailand! A great middle east/Israeli restaurant. Contact us info here.' }
        ]);
    
  }

  ngOnInit() {
  }

}
