import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
    map:any = {};

    setVariable(name:string, value : any):void {
       this.map[name] = value;
    }

    getVariable(name:string):any {
        return this.map[name];
    }

}