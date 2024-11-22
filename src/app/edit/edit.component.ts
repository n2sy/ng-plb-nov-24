import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candAEditer: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.candSer.getCandidatByIdAPI(id).subscribe({
      next: (response: Candidat) => {
        this.candAEditer = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onUpdate() {
    this.candSer.updateCandidatAPI(this.candAEditer).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
