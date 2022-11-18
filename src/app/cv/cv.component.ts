import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { AmbauchServiceService } from '../services/ambauch-service.service';
import { CvServiceService } from '../services/cv-service.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  isHidden: boolean = true;
  personnesliste:Personne[]
  personne:Personne 
  
  constructor( private cvServiceService: CvServiceService,
    private ambauchServiceService:AmbauchServiceService) { 
    this.personnesliste=cvServiceService.personnesliste
    this.personne=this.personnesliste[0]
  }

  ngOnInit(): void {
 
  }
  getpersonne(personne:any) {
   // console.log(personne)
    this.personne=personne
  }
  affichedetails(){
    this.isHidden=!this.isHidden
  }
  add(){
    console.log(this.personne)
    this.ambauchServiceService.addCv(this.personne)
  }

}
