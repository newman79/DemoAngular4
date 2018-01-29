import { NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { MySharedModule } from "../shared/shared.module";
import { PanelLoginComponent } from "./panel-login.component";
import { AuthenticationService } from "./authentification.service";
import { UserService } from "./user.service";
import { UserInfo } from "./userInfo.component";


@NgModule({
    declarations: [PanelLoginComponent, UserInfo ],
    exports:[ PanelLoginComponent, UserInfo ],
    imports: [
      FormsModule, 
      BrowserModule,
      MySharedModule,
      RouterModule.forChild([
        { path: 'login', component: PanelLoginComponent },
        { path: 'logout', component: PanelLoginComponent } 
      ])

    ],
    providers: [AuthenticationService, UserService],
    
  })
  export class LoginModule  { }