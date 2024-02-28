import dotenv from "dotenv";
import { Movie } from "./1-SPR (Single Responsibility Principle)/Movie";
import { MovieRepository } from "./1-SPR (Single Responsibility Principle)/MovieReposiotry";

import { Movie as LiskovMovie } from "./3-LSP (Liskov Substitution Principle)/Movie";
import { TVShow as LiskovTVShow } from "./3-LSP (Liskov Substitution Principle)/TVShow";

dotenv.config({});

console.log("ACCESS_ID: ", process.env.ACCESS_ID);

const first = new Movie({
  name: "The Hundred",
  launch: new Date("2016-02-01"),
});

console.log(JSON.stringify(first));

const movie_repository = new MovieRepository();
movie_repository.create(first.name);

const movies = movie_repository.findAll();
console.log(movies);

const liskovMovie = new LiskovMovie();
console.log(liskovMovie.calculateTime());

const liskovTVShow = new LiskovTVShow();
console.log(liskovTVShow.calculateTime());
