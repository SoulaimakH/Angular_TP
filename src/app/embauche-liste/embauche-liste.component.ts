import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { AmbauchServiceService } from '../services/ambauch-service.service';



@Component({
  selector: 'app-embauche-liste',
  templateUrl: './embauche-liste.component.html',
  styleUrls: ['./embauche-liste.component.css']
})
export class EmbaucheListeComponent implements OnInit {
  personnesliste:Personne[]
  constructor(CvServiceService: AmbauchServiceService) { 
    this.personnesliste=CvServiceService.personnesliste }

  ngOnInit(): void {
  }

}
