import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { PanelProductDetailComponent } from "./panel-productDetail.component";
import { PanelProductsComponent } from "./panel-products.component";
import { ProductService } from "./product.service";
import { ProductGardService } from "./product-guard.service";

import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { MySharedModule } from "../shared/shared.module";
import { PanelProductEditComponentComponent } from './product-edit-component/panel-product-edit.component';

const ROUTES = [
  { path: 'products', component: PanelProductsComponent },
  { path: 'products/:id', canActivate : [ProductGardService], component: PanelProductDetailComponent }, // canActivate : ['ProductGardService'] --> garde pour le routing, fait des vérif avant d'aller là où le user veut aller
  { path: 'products/0/edit', component: PanelProductEditComponentComponent },
  { path: 'products/:id/edit', canActivate : [ProductGardService], component: PanelProductEditComponentComponent } 
];

@NgModule({
    declarations: [ PanelProductDetailComponent, PanelProductsComponent, PanelProductEditComponentComponent ],
    exports:[ PanelProductDetailComponent, PanelProductsComponent, PanelProductEditComponentComponent ],
    imports: [
      FormsModule, 
      BrowserModule,
      MySharedModule,
      RouterModule.forChild(ROUTES)

    ],
    providers: [ProductService, ProductGardService],
    //bootstrap: []
  })
  export class ProductModule { }