import { Component } from '@angular/core';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  selectedStatus = '';
  tabServers = [
    {
      name: 'Production Server',
      type: 'medium',
      date_d: new Date(2022, 4, 3),
      status: 'critical',
    },
    {
      name: 'Test Development Server',
      type: 'large',
      date_d: new Date(2022, 4, 3),
      status: 'stable',
    },
    {
      name: 'Vincent Lacaes Server',
      type: 'medium',
      date_d: new Date(2022, 4, 3),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(2022, 4, 3),
      status: 'stable',
    },
  ];

  constructor(private candSer: GestionCandidatsService) {}

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }

  onAddServer() {
    this.tabServers.push({
      name: 'NEW SERVER',
      type: 'medium',
      date_d: new Date(2022, 4, 3),
      status: 'stable',
    });
  }
}
