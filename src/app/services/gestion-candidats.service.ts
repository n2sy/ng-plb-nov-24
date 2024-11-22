import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/candidats';
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 20, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 40, 'formateur'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.tabCandidats;
  }

  getAllCandidatesAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  addCandidateAPI(newCand) {
    return this.http.post(`${this.link}/free`, newCand);
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }

  addCandidate(newCand) {
    newCand.id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
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
    let i = this.tabCandidats.findIndex((c) => c._id == cand.id);
    this.tabCandidats[i] = cand;
  }
  updateCandidatAPI(cand) {
    return this.http.put(`${this.link}/free/${cand._id}`, cand);
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c._id == id);
    this.tabCandidats.splice(i, 1);
  }

  getCandidatById(candidatId) {
    return this.tabCandidats.find((c) => c._id == candidatId);
  }

  getCandidatByIdAPI(candidatId) {
    return this.http.get(`${this.link}/${candidatId}`);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/free/${id}`);
  }
}
