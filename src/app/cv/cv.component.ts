import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() personne:Personne =new Personne()  
  listeEmbauche:Personne[]
  personneId: number=0
  constructor( private router:Router,private toastr: ToastrService,private cvServiceService: CvServiceService,
    private ambauchServiceService:AmbauchServiceService,private route: ActivatedRoute) { 
    this.personnesliste=cvServiceService.personnesliste
    this.listeEmbauche=this.ambauchServiceService.personnesliste
    route.params.subscribe(params=>{this.personneId=params['id']
   if(this.personneId)
    this.personne=this.personnesliste[this.personneId]
    this.isHidden=true
  });
  }

  ngOnInit(): void {
   this.cvServiceService.subject.subscribe(p=>this.personne=p)
  }
  getpersonne(personne:any) {
    this.personne=personne
  }
  affichedetails(){
    this.isHidden=!this.isHidden
  }
  add(){
    const result=this.ambauchServiceService.addCv(this.personne)
    if(result==1){
      this.toastr.success('Added  to embauchelist', 'successfully');
    }
    else {
      this.toastr.error("cv deja selectionné","failed")
    
    }
  }

  delete(){
    this.router.navigate(['/delete/'+this.personne.id]);
  }

}
