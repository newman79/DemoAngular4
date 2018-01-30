import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { PanelProductDetailComponent } from './panel-productDetail.component';

describe('PanelProductDetailComponent', () => {
  let component: PanelProductDetailComponent;
  let fixture: ComponentFixture<PanelProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProductDetailComponent, StarComponent ],
      imports:[FormsModule, RouterModule, RouterTestingModule, HttpClientModule],
      providers:[ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
