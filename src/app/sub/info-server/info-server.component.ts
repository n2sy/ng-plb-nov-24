import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServeursService } from '../gestion-serveurs.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  selectedServer;
  disabledBtn;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serverSer: GestionServeursService
  ) {}

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serverSer.getServerById(p.get('id'));
      },
    });

    this.activatedRoute.queryParamMap.subscribe({
      next: (qp: ParamMap) => {
        this.disabledBtn = qp.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
