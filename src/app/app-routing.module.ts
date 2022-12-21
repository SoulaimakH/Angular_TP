import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvComponent } from './cv/cv.component';
import { EmbaucheListeComponent } from './embauche-liste/embauche-liste.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AddpersonneComponent } from './addpersonne/addpersonne.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Route[]= [
{ path:'CV', component: CvComponent },
{ path: "MiniWord", component: MiniWordComponent },
{ path: 'detail/:id', component: CvComponent },
{ path: 'delete/:id', component: ListComponent },
{ path: 'login', component: LoginComponent },
{ path: 'Add', component: AddpersonneComponent },
{ path: 'Gallery', component: GalleryComponent },
];

@NgModule({
imports: [CommonModule,RouterModule.forRoot(routes)],
exports: [RouterModule],
})

export class AppRoutingModule { }
