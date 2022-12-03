import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { SimilateurDirective } from './directive/similateur.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvServiceService } from './services/cv-service.service';
import { EmbaucheListeComponent } from './embauche-liste/embauche-liste.component';
import { AmbauchServiceService } from './services/ambauch-service.service';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { LoginComponent } from './login/login.component';
import { AddpersonneComponent } from './addpersonne/addpersonne.component';
import { GalleryComponent } from './gallery/gallery.component';

const sharedModule = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
]
@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    CarteVisiteComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    MiniWordComponent,
    SimilateurDirective,
    DefaultImagePipe,
    EmbaucheListeComponent,
    MenuComponent,
    RouterSimulatorComponent,
    LoginComponent,
    AddpersonneComponent,
    GalleryComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
   
    BrowserModule, FormsModule,
    ReactiveFormsModule,sharedModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),  ToastNoAnimationModule.forRoot(), AppRoutingModule,
  ],
  providers: [CvServiceService,FormsModule,sharedModule,SimilateurDirective,AmbauchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
