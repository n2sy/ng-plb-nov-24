import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  statusOptions = ['', 'unknown', 'active', 'inactive'];
  @Output() eventToHome = new EventEmitter();

  sendNewAccountToHome(newName, newStatus) {
    this.eventToHome.emit({
      name: newName,
      status: newStatus,
    });
  }
}
