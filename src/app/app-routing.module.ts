import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
    
const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [        RouterModule.forRoot(routes)    ],
    exports: [        RouterModule    ],
    declarations: []
})
export class AppRoutingModule { }