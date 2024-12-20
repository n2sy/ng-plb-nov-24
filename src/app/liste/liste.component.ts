import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  allCandidates: Candidat[] = [];
  @Output() candidateToCv = new EventEmitter();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
    //this.allCandidates = this.candSer.getAllCandidates();
    this.candSer.getAllCandidatesAPI().subscribe({
      next: (response: Candidat[]) => {
        this.allCandidates = response;
      },
      error: (err) => {
        alert('Données fictives');
        this.allCandidates = this.candSer.getAllCandidates();
        //console.log(err);
      },
    });
  }

  sendCandidateToCv(cand) {
    this.candidateToCv.emit(cand);
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidates());
  }
}
