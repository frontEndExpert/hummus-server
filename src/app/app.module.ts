import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GmapComponent } from './gmap/gmap.component';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavbarComponent,
    GmapComponent,
    ContactusComponent,
    GalleryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'hummus-server'}),
    FormsModule,
    HttpModule,
//    AgmCoreModule.forRoot({
//      apiKey: 'AIzaSyBQeoSx5RHIWxIRsDpxQmP5VTkWkHn-WF0'
//    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }