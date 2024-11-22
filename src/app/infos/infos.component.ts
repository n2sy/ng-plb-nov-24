import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.cand = this.candSer.getCandidatById(p.get('id'));
      },
      error: (err) => {
        console.log(err);
      },
      //complete
    });
  }

  onDelete() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.cand.id);
      this.router.navigateByUrl('/cv');
    }
  }
}
