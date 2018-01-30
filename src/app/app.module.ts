import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SuperTableModule } from 'ngx-super-table';

import { RouterLinkActive, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductGardService } from './products/product-guard.service';
import { MySharedModule } from './shared/shared.module';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

import { PanelProductDetailComponent } from './products/panel-productDetail.component';
import { ProductModule } from './products/product.module';
import { PanelProductsComponent } from './products/panel-products.component';

import { MainMenuComponent } from './panel-mainmenu.component';
import { PanelWelcomeComponent } from './panel-welcome.component';
import { PanelPathInconnuComponent } from './panel-pathInconnu.component';

import { LoginModule } from './login/login.module';
import { fakeBackendProvider, FakeBackendInterceptor } from './shared/fakeBackend.service';
import { Globals } from './shared/globals-variables';
import { ConsultModule } from './consult/consult.module';

export const APPMODULE_ROUTES:Routes = [
      // ces 2 mapping sont déplacés dans le module ProductModule avec RouterModule.forChild
      //{ path: 'products', component: PanelProductsComponent },
      //{ path: 'products/:id', canActivate : [ProductGardService], component: PanelProductDetailComponent }, // canActivate : ['ProductGardService'] --> garde pour le routing, fait des vérif avant d'aller là où le user veut aller
      { path: 'welcome', component: PanelWelcomeComponent },
      { path: 'pathInconnu', component:PanelPathInconnuComponent },
      { path: '', redirectTo : 'welcome', pathMatch:'full' },
      { path: '**', component:PanelPathInconnuComponent }
];


@NgModule({
  declarations: [
    AppComponent, MainMenuComponent, PanelWelcomeComponent, PanelPathInconnuComponent
  ],
  imports: [
    LoginModule,
    MySharedModule,
    ConsultModule,
    ProductModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SuperTableModule,
    RouterModule.forRoot(APPMODULE_ROUTES, { useHash : true} )
  ],
  providers: [ FakeBackendInterceptor, fakeBackendProvider, Globals ],
  bootstrap: [AppComponent],  
})
export class AppModule { }
