import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Movie} from '../models';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:8083/movies")
      .toPromise()
      .then(movies => (movies || []).map(movie => new Movie(movie)));
  }

  getById(id: number): Promise<Movie> {
    return this.httpClient.get<Movie>(`http://localhost:8083/movie/${id}`)
      .toPromise()
      .then(movie => new Movie(movie))
  }

}