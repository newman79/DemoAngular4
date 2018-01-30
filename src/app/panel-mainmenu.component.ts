import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector:'panel-mainmenu',
    templateUrl:'./panel-mainmenu.component.html',
    styles:[`
        a  {font-size:15px;}
        a.active { font-size:17px; background:rgb(211,251,255); }
        a.active:focus { font-size:17px; background:rgb(211,251,255); }
        a.active:visited { font-size:17px; background:rgb(211,251,255); }
        a.active:hover { font-size:17px; background:rgb(211,251,255); }
    
        .panel-maincontent { border:1px solid rgb(176,255,98); border-radius:5px; margin:3px; margin-top:60px; }
    `]

    
})
export class MainMenuComponent {

    testProperty:string = 'rien';
    
    constructor() {}
}