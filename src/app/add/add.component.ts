import { Component } from '@angular/core';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  onAdd(fValue, e) {
    console.log(e.target[4].files[0]);
    let formData = new FormData();
    formData.append('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        //console.log(response);
        fValue.avatar = response['fileName'];
        this.candSer.addCandidateAPI(fValue).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
        });
      },
    });

    // this.candSer.addCandidate(fValue);
    // this.router.navigateByUrl('/cv');
  }
}
