import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PanelLoginComponent } from './login/panel-login.component';
import { UserInfo } from './login/userInfo.component';
import { MainMenuComponent } from './panel-mainmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Globals } from './shared/globals-variables';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, PanelLoginComponent, UserInfo, MainMenuComponent
      ],
      imports: [HttpClientModule, FormsModule, RouterModule,  RouterTestingModule  ],
      providers : [Globals]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular: Getting Started'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my first demo');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to');
  }));
});
