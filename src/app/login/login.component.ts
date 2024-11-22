import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLangagePrefere = 'php';
  defaultComment = 'Rien à signaler...';
  onSubmit(f) {
    console.log(f.value);
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
}
