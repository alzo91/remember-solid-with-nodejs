import { randomUUID } from "crypto";

export interface CategoryProps {
  uuid?: string;
  name: string;
  updated_at?: Date | null;
}
export class Category {
  uuid: string;
  name: string;
  updated_at: Date;

  constructor(props: CategoryProps) {
    this.uuid = props.uuid ?? randomUUID();
    this.name = props.name;
    this.updated_at = props.updated_at ?? new Date();
  }
}
