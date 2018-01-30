import { Component, OnInit, ViewChild } from '@angular/core';
import { Globals } from './shared/globals-variables';
import { MainMenuComponent } from './panel-mainmenu.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my first demo';

  @ViewChild(MainMenuComponent) mainMenu : MainMenuComponent;

  constructor(private globals : Globals) {}

  ngOnInit(): void {
    this.globals.map['test'] = 'PourTester';

    this.mainMenu.testProperty = 'quelquechose';

  }
}
