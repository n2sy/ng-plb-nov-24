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

  addCandidate(newCand) {
    newCand.id = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    this.tabCandidats.push(newCand);

    // Version en OO
    // let generatedId = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    // let c = new Candidat(
    //   generatedId,
    //   newCand.prenom,
    //   newCand.nom,
    //   newCand.age,
    //   newCand.profession,
    //   newCand.avatar
    // );
    // this.tabCandidats.push(c);
  }

  showInfos() {
    console.log('Je suis le service');
  }

  updateCandidat(cand) {
    let i = this.tabCandidats.findIndex((c) => c.id == cand.id);
    this.tabCandidats[i] = cand;
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c.id == id);
    this.tabCandidats.splice(i, 1);
  }

  getCandidatById(candidatId) {
    return this.tabCandidats.find((c) => c.id == candidatId);
  }
}
