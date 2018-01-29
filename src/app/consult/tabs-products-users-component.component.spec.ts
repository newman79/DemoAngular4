import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTabsProductsUsersComponent } from './tabs-products-users-component.component';
import { RouterModule } from '@angular/router';
import { Globals } from '../shared/globals-variables';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('PanelTabsProductsUsersComponent', () => {
  let component: PanelTabsProductsUsersComponent;
  let fixture: ComponentFixture<PanelTabsProductsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTabsProductsUsersComponent ],
      imports:[HttpClientModule, FormsModule,RouterModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTabsProductsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
