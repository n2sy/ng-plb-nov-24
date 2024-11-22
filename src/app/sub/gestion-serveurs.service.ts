import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServeursService {
  tabServers = [
    {
      id: 1,
      name: 'Vincent Server',
      statut: 'online',
    },
    {
      id: 2,
      name: 'Léon Server',
      statut: 'offline',
    },
    {
      id: 3,
      name: 'Layal Server',
      statut: 'online',
    },
  ];

  getServerById(serverId) {
    return this.tabServers.find((serv) => serv.id == serverId);
  }

  constructor() {}
}
