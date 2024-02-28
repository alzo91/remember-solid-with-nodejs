import { Movie } from "./Movie";

export class MovieRepository {
  repository: Array<Movie> = [];

  create(name: string, launch?: Date | null) {
    const movie = new Movie({ name, launch });
    console.log(movie);
    this.repository.push(movie);
  }

  findAll() {
    return this.repository;
  }

  findOne(id: string) {
    return this.repository.find((movie) => movie._id === id);
  }
}
