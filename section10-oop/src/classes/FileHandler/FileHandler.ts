import { Action } from "./Action";

//Injection example
export class FileHandler {
  content: String = "";
  reader!: Action;
  writer!: Action;

  constructor(reader: Action, writer: Action) {
    this.reader = reader;
    this.writer = writer;
  }
}
