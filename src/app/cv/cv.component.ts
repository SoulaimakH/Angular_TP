import { Component, OnInit } from '@angular/core';
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
  personne:Personne =new Personne()  
  listeEmbauche:Personne[]
  personneId: number=0
  constructor( private router:Router,private toastr: ToastrService,private cvServiceService: CvServiceService,
    private ambauchServiceService:AmbauchServiceService,private route: ActivatedRoute) { 
    this.personnesliste=cvServiceService.personnesliste
    //this.personne=this.personnesliste[0]
    this.listeEmbauche=this.ambauchServiceService.personnesliste
   
    route.params.subscribe(params=>{this.personneId=params['id']
   if(this.personneId)
    this.personne=this.personnesliste[this.personneId]
  });

    //const routeParams = this.route.snapshot.paramMap;
   // const personneIdFromRoute = Number(routeParams.get('id'));
   
   
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

  delete(){
    this.router.navigate(['/delete/'+this.personne.id]);
  }

}
