import { Component } from '@angular/core';
import { GestionServeursService } from '../gestion-serveurs.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrl: './home-servers.component.css',
})
export class HomeServersComponent {
  allServers = [];

  constructor(private ServerSer: GestionServeursService) {}

  ngOnInit() {
    this.allServers = this.ServerSer.tabServers;
  }
}
