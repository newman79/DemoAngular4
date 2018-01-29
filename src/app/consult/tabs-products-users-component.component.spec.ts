import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTabsProductsUsersComponentComponent } from './tabs-products-users-component.component';

describe('TabsProductsUsersComponentComponent', () => {
  let component: PanelTabsProductsUsersComponentComponent;
  let fixture: ComponentFixture<PanelTabsProductsUsersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTabsProductsUsersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTabsProductsUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
