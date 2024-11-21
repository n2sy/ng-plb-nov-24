import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
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

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
