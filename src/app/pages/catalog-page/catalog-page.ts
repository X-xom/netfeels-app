import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constans/film.constants';
import { FilmsServices } from '../../services/films';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  // public films: Film[] = FILMS
  constructor(
      private _filmsService: FilmsServices
  ) {}

  public get films(): Film[]{
    return this._filmsService.filterFilms
  }
}
