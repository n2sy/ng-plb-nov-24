import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLangagePrefere = 'php';
  onSubmit(f) {
    console.log(f);
  }
}
