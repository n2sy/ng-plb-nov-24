import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) textColor: string = 'blue';

  @Output() msgToParent = new EventEmitter();

  onSend() {
    this.msgToParent.emit('Lettre de la part du Child component');
  }
}
