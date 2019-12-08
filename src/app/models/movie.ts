export class Movie {
    movieId: number;
    title: string;
    movieDescription: string;
    length: number;
    genre: string;
    rating: string;

    constructor(movie: Movie){
        this.movieId = movie.movieId;
        this.title = movie.title;
        this.movieDescription = movie.movieDescription;
        this.length = movie.length;
        this.genre = movie.genre;
        this.rating = movie.rating;
    }
}