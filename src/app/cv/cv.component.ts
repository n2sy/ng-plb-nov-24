import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [GestionRecruesService],
})
export class CvComponent {
  selectedCandidate: Candidat;
  tabCandidats: Candidat[] = [];

  recupererCandidat(cand: Candidat) {
    this.selectedCandidate = cand;
  }

  //Manière 1 - Injection de dépendances
  constructor(private candSer: GestionCandidatsService) {}

  //Manière 2 - Injection de dépendances
  //private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.showInfos();
    this.tabCandidats = this.candSer.getAllCandidates();
  }

  // onAddCandidate() {
  //   this.candSer.addCandidate();
  // }

  showCandidats() {
    console.log(this.candSer.getAllCandidates());
  }
}
