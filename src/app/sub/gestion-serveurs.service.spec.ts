import { TestBed } from '@angular/core/testing';

import { GestionServeursService } from './gestion-serveurs.service';

describe('GestionServeursService', () => {
  let service: GestionServeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
