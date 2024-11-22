import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 20, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 40, 'formateur'),
  ];
  constructor() {}

  getAllCandidates() {
    return this.tabCandidats;
  }

  // addCandidate() {
  //   this.tabCandidats.push(
  //     new Candidat(3, 'NEW', 'CANDIDAT', 20, 'designer', 'lisa.png')
  //   );
  // }

  showInfos() {
    console.log('Je suis le service');
  }

  getCandidatById(candidatId) {
    return this.tabCandidats.find((c) => c.id == candidatId);
  }
}
