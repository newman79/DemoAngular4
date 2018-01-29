import { Component, OnInit } from '@angular/core';
import { Globals } from './shared/globals-variables';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my first demo';

  constructor(private globals : Globals) {}

  ngOnInit(): void {
    this.globals.map['test'] = 'PourTester';
  }
}
