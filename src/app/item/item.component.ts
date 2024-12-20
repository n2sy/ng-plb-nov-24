import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
  @Output() candidateToListe = new EventEmitter();

  sendCandidateToListe() {
    this.candidateToListe.emit(this.unCandidat);
  }
}
