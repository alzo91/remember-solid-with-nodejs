import { randomUUID } from "crypto";

type MovieProps = { id?: string; name: string; launch?: Date | null };

export class Movie {
  _id: string;
  name: string;
  launch?: Date | null;

  constructor(props: MovieProps) {
    this._id = props.id ?? randomUUID();
    this.name = props.name;
    this.launch = this.launch ?? new Date();
  }
}
