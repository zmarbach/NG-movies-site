import { Component, OnInit } from '@angular/core';
import { MovieService } from './services';
import { Movie } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movies-site';

  movies: Movie[];

  movie: Movie;

  id: number = 2;

  constructor(private movieService: MovieService){
  
  }

  ngOnInit(){
    this.movieService.getAll()
    .then(movies => this.movies = movies);

    this.movieService.getById(this.id)
      .then(movie => this.movie = movie);
  }

}

