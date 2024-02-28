import { randomUUID } from "crypto";
import { Category } from "./Category";

type MovieProps = {
  id?: string;
  name: string;
  launch?: Date | null;
  category?: Category;
};

export class Movie implements Movie {
  _id: string;
  name: string;
  launch?: Date | null;
  category?: Category;

  constructor(props: MovieProps) {
    this._id = props.id ?? randomUUID();
    this.name = props.name;
    this.launch = props.launch ?? new Date();
    this.category = props.category;
  }
}
