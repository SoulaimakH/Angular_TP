import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-addpersonne',
  templateUrl: './addpersonne.component.html',
  styleUrls: ['./addpersonne.component.css']
})
export class AddpersonneComponent implements OnInit {
  personne=new Personne()
  constructor(private router:Router,private cvServiceService: CvServiceService) { }

  ngOnInit(): void {
  }
  AddPersonne(){
    this.personne.id= this.cvServiceService.personnesliste.length.toString()
    this.cvServiceService.personnesliste.push(this.personne)
    this.router.navigate(['CV']);
  }
}
