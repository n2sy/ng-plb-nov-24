import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  constructor(private router: Router, private http: HttpClient) {}

  goToMsWord() {
    this.router.navigateByUrl('ms-word');
  }

  goToCv() {
    this.router.navigate(['cv']);
  }

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/usersee').subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux fermé');
    //   },
    // });
  }
}
