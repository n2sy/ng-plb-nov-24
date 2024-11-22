import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      addMail: new FormControl('', [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  get formSkills() {
    return <FormArray>this.signupForm.get('skills');
  }

  addSkill() {
    let ctrl = new FormControl('', Validators.required);
    this.formSkills.push(ctrl);
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
