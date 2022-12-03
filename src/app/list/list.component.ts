import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() sendMessageToDad = new EventEmitter<any>();
  @Input() personnes:Personne[]=[]
  color='white'
  number=4
  personneId:number=0
  col: any[]=[{'col-md-1':'true'},{'col-md-2':'true'},{'col-md-3':'true'},{'col-md-4':'true'},{'col-md-5':'true'}]
  constructor( private router:Router,private route: ActivatedRoute,private cvServiceService: CvServiceService)
   { 
    
    this.personnes=cvServiceService.personnesliste
    route.params.subscribe(params=>{this.personneId=params['id']
   if(this.personneId && this.router.url.includes('delete')){
    delete this.personnes[Number(this.personneId)]
    this.router.navigate(['CV']);
   }
  
  });

  }

  ngOnInit(): void {
  }
  sendData(p:any) {
    this.sendMessageToDad.emit(p);
  }
  getpersonne(personne:any) {
    // console.log(personne)
    this.sendMessageToDad.emit(personne);
   }
   tojson(){
    return this.col[this.number]
   }

  
}
