import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { MySharedModule } from "../shared/shared.module";
import { PanelTabsProductsUsersComponent } from "./tabs-products-users-component.component";
import { ProductService } from "../products/product.service";
import { FakeBackendInterceptor } from "../shared/fakeBackend.service";
import { ProductModule } from "../products/product.module";
import { PanelProductInfoComponent } from "./products/panel-product-info.component";
import { PanelUserInfoComponent } from "./users/panel-user-info.component";
import { PanelAboutComponent } from "./about/panel-about.component";

const ROUTES = [
  { path: 'consult', 
    component: PanelTabsProductsUsersComponent,
    children : [
      { path : '', redirectTo:'products', pathMatch : 'full' },
      { path : 'products', component: PanelProductInfoComponent },
      { path : 'users', component: PanelUserInfoComponent }, 
      { path : 'about', component: PanelAboutComponent },
    ]
  },
];

@NgModule({
    declarations: [ PanelTabsProductsUsersComponent, PanelProductInfoComponent, PanelUserInfoComponent, PanelAboutComponent  ],
    exports:[ PanelTabsProductsUsersComponent ],
    imports: [
      ProductModule,
      MySharedModule,
      FormsModule, 
      BrowserModule,      
      RouterModule.forChild(ROUTES)
    ],
    providers: [ProductService, FakeBackendInterceptor],
    //bootstrap: []
  })
  export class ConsultModule { }