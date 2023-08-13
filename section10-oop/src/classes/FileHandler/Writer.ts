import { Action } from "./Action";

export class Writer implements Action {
  fileName: String = "";

  action(content: String): void {
    console.log(`Writing ${content} in ${this.fileName}...`);
  }

  setFile(fileName: String) {
    if (fileName) {
      this.fileName = fileName;
    } else {
      throw new Error("filename must exist");
    }
  }
}
