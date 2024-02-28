import { randomUUID } from "crypto";
import { Category, CategoryProps } from "./Category";

export class DramaCategory implements Category {
  uuid: string;
  name: string;
  updated_at: Date;

  constructor(props: CategoryProps) {
    this.uuid = props.uuid ?? randomUUID();
    this.name = props.name;
    this.updated_at = props.updated_at ?? new Date();
  }
}
