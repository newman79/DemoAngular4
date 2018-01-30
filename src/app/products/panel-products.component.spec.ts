import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { PanelProductsComponent } from './panel-products.component';
import { MySharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

describe('PanelProductsComponent', () => {
  let component: PanelProductsComponent;
  let fixture: ComponentFixture<PanelProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProductsComponent ],
      imports:[FormsModule, RouterModule, RouterTestingModule, HttpClientModule, MySharedModule],
      providers:[ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
