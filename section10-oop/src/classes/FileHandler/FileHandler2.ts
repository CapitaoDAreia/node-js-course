import { Action } from "./Action"
import { Reader } from "./Reader";
import { Writer } from "./Writer";

//Composition example
export class FileHandler2{
    content: String = ""
    reader!: Action;
    writer!: Action;

    constructor(){
        this.reader = new Reader;
        this.writer = new Writer;
    }
}