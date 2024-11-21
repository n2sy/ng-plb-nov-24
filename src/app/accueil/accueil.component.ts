import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  constructor(private router: Router) {}

  goToMsWord() {
    this.router.navigateByUrl('ms-word');
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
