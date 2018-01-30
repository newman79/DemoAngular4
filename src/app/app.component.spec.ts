import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PanelLoginComponent } from './login/panel-login.component';
import { UserInfo } from './login/userInfo.component';
import { MainMenuComponent } from './panel-mainmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Globals } from './shared/globals-variables';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { PanelProductsComponent } from './products/panel-products.component';
import { PanelTabsProductsUsersComponent } from './consult/tabs-products-users-component.component';
import { PanelWelcomeComponent } from './panel-welcome.component';
import { MySharedModule } from './shared/shared.module';
import { SuperTableModule } from 'ngx-super-table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { APPMODULE_ROUTES } from './app.module';
import { PRODUCTS_ROUTES, ProductModule } from './products/product.module';
import { PanelPathInconnuComponent } from './panel-pathInconnu.component';
import { ProductService } from './products/product.service';
import { PanelProductDetailComponent } from './products/panel-productDetail.component';
import { PanelProductEditComponent } from './products/product-edit-component/panel-product-edit.component';
import { IProduct } from './products/iproduct';

describe('1st test', () => {
  it('true is true', () => expect(true).toBe(true));
});

describe('AppComponent test', () => {

  var fixture;
  var comp;
  var router;
  var location;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, PanelLoginComponent, UserInfo, MainMenuComponent, PanelTabsProductsUsersComponent, 
        PanelWelcomeComponent, PanelPathInconnuComponent
      ],
      imports: [
          HttpClientModule, 
          FormsModule, 
          RouterTestingModule.withRoutes(APPMODULE_ROUTES.concat(PRODUCTS_ROUTES)), 
          ProductModule,
          MySharedModule, 
          SuperTableModule  ],
      providers : [Globals, ProductService]
    }).compileComponents().then(() => {
      
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.get(Router);
      location = TestBed.get(Location);
  
      //console.log('router is', router);
      router.initialNavigation(); // This sets up the location change listener and performs the initial navigation.    
        
    });
  }));

/*    
  beforeEach( () => {
  });
*/  

  it('should create the app', async(() => {    
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'my first demo'`, async(() => {    
    expect(comp.title).toEqual('my first demo');
  }));

  it('should render title in a h1 tag', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to');
  }));

  it('should render title h1 tag starting with', async(() => {    
    const de = fixture.debugElement.query(By.css('h1'));
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/^Welcome/i);    
  }));

  it('should contain panel-mainmenu tag', async(() => {    
    const panelMainMenuTagDebugElement = fixture.debugElement.query(By.css('panel-mainmenu'));
    
    console.log('panelMainMenuTag is ', panelMainMenuTagDebugElement.nativeElement);    
    console.log('panelMainMenuComponent is ', fixture.debugElement.componentInstance.mainMenu);
    console.log('panelMainMenuComponent is ', panelMainMenuTagDebugElement.componentInstance);

    expect(panelMainMenuTagDebugElement.nativeElement).not.toBeNull();
  }));

  it('panel-mainmenu contains tag router-outlet', async(() => {    
    const panelMainMenuTagDebugElement = fixture.debugElement.query(By.css('panel-mainmenu'));
    const mainMenuComponentInstance = panelMainMenuTagDebugElement.componentInstance;
    console.log('panelMainMenuTagDebugElement', panelMainMenuTagDebugElement);
    const routerOutletDebugElement = panelMainMenuTagDebugElement.query(By.css('router-outlet'));
    expect(routerOutletDebugElement.nativeElement).not.toBeNull();
    console.log('routerOutletDebugElement', routerOutletDebugElement);
  }));

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should startup with url equals to welcome', fakeAsync(() => {    
    router.navigate(['']);
    tick(50); // wait for all pending promises to be resolved.
    expect(location.path()).toBe('/welcome');
  }));

  it('when url is pathInconnu or wrong url, should navigate to pathInconnu', fakeAsync(() => {    
    router.navigate(['pathInconnu']);
    tick(50); // wait for all pending promises to be resolved.
    expect(location.path()).toBe('/pathInconnu');

    router.navigate(['unMauvaisChemin']);
    tick(50); // wait for all pending promises to be resolved.
    expect(location.path()).toBe('/unMauvaisChemin');
    const panelMainMenuTagDebugElement = fixture.debugElement.query(By.css('panel-mainmenu'));
    const routerOutletDebugElement = panelMainMenuTagDebugElement.query(By.css('router-outlet'));
    //console.log('routerOutletDebugElement', routerOutletDebugElement);

    const divAfficheeDuRouterOutletDebugElement = routerOutletDebugElement.parent.query(By.css('div.panel.panel-body'));
    console.log('divAfficheeDuRouterOutletDebugElement', divAfficheeDuRouterOutletDebugElement);
    expect(divAfficheeDuRouterOutletDebugElement.componentInstance.constructor.name).toBe('PanelPathInconnuComponent');

    const divAfficheeDuRouterOutletHtmlElement = divAfficheeDuRouterOutletDebugElement.nativeElement;
    console.log('divContenantRouterOutletDebugElement', divAfficheeDuRouterOutletHtmlElement);
    expect(divAfficheeDuRouterOutletHtmlElement.innerHTML).toContain("Chemin non trouvé : vous vous trouvez sur une page qui n'existe pas");
  }));  


  it('when url is products, should navigate to products and display products component', fakeAsync(() => {    
    router.navigate(['products']);
    tick(); // wait for all pending promises to be resolved.
    expect(location.path()).toBe('/products');

    const panelMainMenuTagDebugElement = fixture.debugElement.query(By.css('panel-mainmenu'));
    const routerOutletDebugElement = panelMainMenuTagDebugElement.query(By.css('router-outlet'));
    //console.log('routerOutletDebugElement', routerOutletDebugElement);

    const divAfficheeDuRouterOutletDebugElement = routerOutletDebugElement.parent.query(By.css('div.panel.panel-body'));
    console.log('divAfficheeDuRouterOutletDebugElement', divAfficheeDuRouterOutletDebugElement);
    expect(divAfficheeDuRouterOutletDebugElement.componentInstance.constructor.name).toBe('PanelProductsComponent');

    const divAfficheeDuRouterOutletHtmlElement = divAfficheeDuRouterOutletDebugElement.nativeElement;
    console.log('divContenantRouterOutletDebugElement', divAfficheeDuRouterOutletHtmlElement);
    
    const divTitreDivAfficheeDuRouterOutletDebugElement = divAfficheeDuRouterOutletDebugElement.query(By.css('div.panel-heading'));
    console.log('divTitreDivAfficheeDuRouterOutlet', divTitreDivAfficheeDuRouterOutletDebugElement);
    
    expect(divTitreDivAfficheeDuRouterOutletDebugElement.componentInstance.constructor.name).toBe('PanelProductsComponent');
    console.log('divTitreDivAfficheeDuRouterOutletDebugElement.nativeElement', divTitreDivAfficheeDuRouterOutletDebugElement.nativeElement);
    //expect(divTitreDivAfficheeDuRouterOutletDebugElement.nativeElement.innerHTML).toContain('Liste des produit');
    
    expect(divTitreDivAfficheeDuRouterOutletDebugElement.componentInstance.title).toContain('Liste des produit');

    let product : IProduct = new IProduct(5,'Name5','Code5','21/04/2015','desc',55,4,'imageUrl');
    divTitreDivAfficheeDuRouterOutletDebugElement.componentInstance.onClickOnProductDetail(product);
    tick();
    expect(location.path().toString()).toMatch(/products/i);
    //expect(divAfficheeDuRouterOutletHtmlElement.innerHTML).toContain("Chemin non trouvé : vous vous trouvez sur une page qui n'existe pas");

    //inputButtonEl.dispatchEvent(new Event('input'));
  }));

});
