import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductEditComponent } from './panel-product-edit.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../../shared/star.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';

describe('PanelProductEditComponent', () => {
  let component: PanelProductEditComponent;
  let fixture: ComponentFixture<PanelProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProductEditComponent, StarComponent ],
      imports:[FormsModule, RouterModule, RouterTestingModule, HttpClientModule],
      providers:[ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
