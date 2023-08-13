export abstract class Action {
  fileName: String = "";
  action(content?: String): void {}
  setFile(fileName: String) {}
}
