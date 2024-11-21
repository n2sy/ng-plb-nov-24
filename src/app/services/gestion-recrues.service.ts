import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { TestService } from './test.service';

@Injectable()
export class GestionRecruesService {
  private tabRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRecrue: Candidat) {
    this.test.sayHello();
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté !');
  }

  constructor(private test: TestService) {}
}
