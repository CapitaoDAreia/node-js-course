import { Action } from "./Action";

export class Reader implements Action {
  fileName: String = "";

  action() {
    console.log(`Reading ${this.fileName}...`);
  }
  setFile(fileName: String) {}
}
