import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css',
})
export class MsWordComponent {
  bgColor;
  txtColor;
  size;
  font;

  changeSize(newSizeValue) {
    let unité = prompt('Veuillez saisir une unité');
    this.size = `${newSizeValue}${unité}`;
  }
}
