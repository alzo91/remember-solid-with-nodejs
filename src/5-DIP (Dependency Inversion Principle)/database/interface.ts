import { Movie } from "../entities/Movie";

export abstract class MovieRepository {
  abstract create(movie: Movie): Promise<void>;
  abstract findAll(): Promise<Movie[]>;
}
