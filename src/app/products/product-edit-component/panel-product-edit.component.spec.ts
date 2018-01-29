import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductEditComponentComponent } from './panel-product-edit.component';

describe('PanelProductEditComponentComponent', () => {
  let component: PanelProductEditComponentComponent;
  let fixture: ComponentFixture<PanelProductEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProductEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
