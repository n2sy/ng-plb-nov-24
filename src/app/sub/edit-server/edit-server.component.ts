import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionServeursService } from '../gestion-serveurs.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  serverToUpdate;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverSer: GestionServeursService
  ) {}

  ngOnInit() {
    this.serverToUpdate = this.serverSer.getServerById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }
}
