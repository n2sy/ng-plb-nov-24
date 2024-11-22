import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  seConnecter(identifants) {
    return this.http.post(`${this.link}/login`, identifants);
  }

  seDeconnecter() {
    localStorage.removeItem('access_token');
  }

  inscription(identifants) {
    return this.http.post(`${this.link}/register`, identifants);
  }

  estConnecte() {
    let token = localStorage.getItem('access_token');
    return !!token;
  }
}
