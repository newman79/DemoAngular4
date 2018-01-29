import { Component, Input } from "@angular/core";
import { User } from "./iusers";
import { Globals } from "../shared/globals-variables";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector:'login-user-infos',
    templateUrl:'./userInfo.component.html'
})
export class UserInfo  {

    constructor(private globals : Globals) { }

    getUser():User  {

        let user = <User>this.globals.getVariable("actualUser");
        if (user != null && user!=undefined) {
            return user;
        }        
        return null;
    }

    isLogged():boolean {
        return this.getUser() != null;
    }
}