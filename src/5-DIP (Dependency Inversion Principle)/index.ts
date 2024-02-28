import { InMemoryMovieDatabase } from "./database/in-memory-movie-database";
import { Category } from "./entities/Category";
import { DramaCategory } from "./entities/DramaCategory";
import { Movie } from "./entities/Movie";

const movie_repository = new InMemoryMovieDatabase();

const carton_category = new Category({ name: "Carton" });
const drama_category = new DramaCategory({ name: "tragedy" });

const the_lion_king = new Movie({
  name: "The Lion King",
  category: carton_category,
});

const wall_street = new Movie({
  name: "Wall Street",
  category: drama_category,
});

movie_repository.create(the_lion_king);
movie_repository.create(wall_street);

console.log("\n\n");
console.log(movie_repository.findAll());

console.log("\n");
console.log(movie_repository.findCategories());
