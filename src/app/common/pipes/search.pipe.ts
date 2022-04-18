import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform<T>(items: T[], searchText: string): T[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: T & { title: string }) => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }

}
