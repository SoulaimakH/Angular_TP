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
  personne:Personne =new Personne()  
  listeEmbauche:Personne[]
  constructor( private toastr: ToastrService,private cvServiceService: CvServiceService,
    private ambauchServiceService:AmbauchServiceService) { 
    this.personnesliste=cvServiceService.personnesliste
    //this.personne=this.personnesliste[0]
    this.listeEmbauche=this.ambauchServiceService.personnesliste
   
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
   // console.log(this.personne)
    const result=this.ambauchServiceService.addCv(this.personne)
    if(result==1){
      this.toastr.success('Added  to embauchelist', 'successfully');
    }
    else {
      this.toastr.error("cv deja selectionné","failed")
    
    }
  }


}
