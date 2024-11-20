import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Pauline';
  ville = 'Paris';

  color: string = 'pink';
  cache: boolean = false;

  traitement() {
    alert("J'ai été cliqué !");
  }

  modifierVille(nouvelleVille: string) {
    console.log(nouvelleVille);

    this.ville = nouvelleVille;
  }
}
