import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLangagePrefere = 'php';
  defaultComment = 'Rien à signaler...';
  showLogin = true;
  showErrorMsg = false;

  constructor(private authSer: AuthService, private router: Router) {}
  onSubmit(f) {
    console.log(f.value);
  }

  onLogin(f: NgForm) {
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
        this.showErrorMsg = true;
        f.reset();
      },
    });
  }

  onRegister(f: NgForm) {
    this.authSer.inscription(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        this.toggleShowLogin();
        f.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  generatedPwd(f: NgForm) {
    f.form.patchValue({
      password: 'azerty123',
      infos: {
        langage: 'java',
      },
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }

  toggleShowLogin() {
    this.showLogin = !this.showLogin;
  }
}
