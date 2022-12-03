import { sequence } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Personne } from '../model/personne';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  personnesliste:Personne[]
  personne:Personne=new Personne()
  num:number=0
  subscription: Subscription;
  constructor(private cvServiceService: CvServiceService) {
    const sequence = new Observable();
    this.personnesliste=cvServiceService.personnesliste
    this.personne= this.personnesliste[0]
   //emit value in sequence every 10 second
    const source = interval(1000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => {
      this.incrimentListe()
    }
   
      );
   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
incrimentListe(){
  if(this.num<this.personnesliste.length-1)
  this.num+=1
  else
  this.num=0
  console.log(this.num)
  this.personne= this.personnesliste[this.num]
}
}
