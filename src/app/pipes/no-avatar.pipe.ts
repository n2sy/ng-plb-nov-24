import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAvatar',
})
export class NoAvatarPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return 'avatar.jpg';
    return value;
  }
}
