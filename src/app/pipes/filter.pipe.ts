import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (!selStatus.length) return value;
    else {
      return value.filter((serveur) => serveur['status'] == selStatus);
      // let newTab = [];
      // for (const serveur of value) {
      //   if (serveur['status'] == selStatus) newTab.push(serveur);
      // }
      // return newTab;
    }
  }
}
