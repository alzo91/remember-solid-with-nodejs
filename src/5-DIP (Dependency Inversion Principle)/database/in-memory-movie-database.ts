import { Movie } from "../entities/Movie";
import { Category } from "../entities/Category";
import { MovieRepository } from "./interface";

export class InMemoryMovieDatabase implements MovieRepository {
  repository: Movie[];

  constructor() {
    this.repository = [];
  }

  async create(movie: Movie): Promise<void> {
    this.repository.push(movie);
  }

  async findAll(): Promise<Movie[]> {
    return this.repository;
  }

  async findCategories(): Promise<Category[]> {
    const categories: Category[] = this.repository
      .filter(
        (movie) => movie.category !== undefined && movie.category !== null
      )
      .map((movie) => movie.category!)
      .sort((prev, next) => prev.name.localeCompare(next.name));

    return categories;
  }
}
