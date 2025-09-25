import { Component } from '@angular/core';
import { FilmsServices } from '../../services/films';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  public searchString: string = ''

  constructor(private _filmsService: FilmsServices){

  }

  public updateValue(event: Event){
    const target = event.target as HTMLInputElement
    this.searchString = target.value

  }

  public updateSearch(event: Event){
    this._filmsService.searchString = this.searchString
  }
}
