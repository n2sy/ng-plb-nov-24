import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  cand: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //1ere méthode
    //console.log(this.activatedRoute.snapshot.params['id']);
    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    //2eme methode
    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.cand = this.candSer.getCandidatById(p.get('id'));
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   //complete
    // });

    this.candSer
      .getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.cand = response;
        },
        error: (err) => {
          alert('Aucun candidat avec cet ID');
          this.router.navigateByUrl('/not-found');
        },
      });
  }

  onDelete() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.cand._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
