import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constans/film.constants';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FilmsServices } from '../../services/films';

@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.html',
  styleUrl: './film-page.css'
})
export class FilmPage implements OnInit{
  public films: Film[] = []
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: FilmsServices
      
  ) {}
  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')
    this.films = this._filmsService.getFullFilms
    this._initFilm(Number(id))
  }    
  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id) 

    if (findFilm){
      this.film = findFilm
    } else{
      this._router.navigate(['/'])
    }
    
  }
}
