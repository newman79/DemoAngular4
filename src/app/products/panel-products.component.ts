import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, ActivatedRoute  } from "@angular/router";
import { IProduct } from './iproduct';
import { ProductService } from "./product.service";

@Component({
    // Le selector n'a plus de sens depuis que nous avons mis en place le routing
    // selector:'panel-products',
    templateUrl: './panel-products.component.html'
})
export class PanelProductsComponent implements OnInit {
    title: string = 'Liste des produits';
    showOrHide: boolean;    
    imageWidth: number= 50;
    _imageWidthPercent :number;
    products: IProduct[];
    filteredProduct: IProduct[];    

    _filteredByName: string;

    constructor(private productService: ProductService, private router:Router, private activatedRoute:ActivatedRoute) { }

    set filteredByName(value: string) {
        //console.log('filteredByName setter called');
        this._filteredByName = value;
        this.performProductFilter();
    }
    get filteredByName():string {
        return this._filteredByName;        
    }

    set imageWidthPercent(value: number) {
        //console.log('filteredByName setter called');
        this._imageWidthPercent = value;
        this.imageWidth = this._imageWidthPercent * 50 / 100;
    }
    get imageWidthPercent():number {
        return this._imageWidthPercent;        
    }
    
    toggleImagesAndButton() {
        this.showOrHide = !this.showOrHide;
    }

    onNotify(message: string) : void {
        console.log('notified that something changed on the view', message);
    }

    ngOnInit(): void {
        console.log('PanelProductsComponent.ngOnInit() called');
        
         // ca ne change rien, imageWidthPercent sera toujours réinitialisé à 50. Il faudrait se service d'une variable globale. Par exemple utiliser GLobals dans shared
         // ==> Mais astuce : récupérer le contexte par les paramètres de requête
         this.imageWidthPercent = this.activatedRoute.snapshot.queryParams['imageWidthPercent'];
         if (isNaN(this.imageWidthPercent)) {
            this.imageWidthPercent = 50;
         }

         let showOrHideStr = this.activatedRoute.snapshot.queryParams['showOrHide'];
         this.showOrHide = showOrHideStr == "true" ? true : false;
         
         this._filteredByName = this.activatedRoute.snapshot.queryParams['filteredByName'];

         this.loadProduct();
    }

    performProductFilter():void {
        this._filteredByName = this._filteredByName.toLocaleLowerCase();
        console.log("performProductFilter set filter", this._filteredByName);
        if (this.products.length > 0) {
            this.filteredProduct = this.products.filter( p => { return p.productName.toLocaleLowerCase().indexOf(this._filteredByName) != -1; } );
        } else {
            this.filteredProduct = [];
        }        
    }

    loadProduct(): void {
        this.productService.getProducts().subscribe(
            p => this.onLoadProductsSucces(p),
            this.onLoadProductsFailure
        );
    }

    onLoadProductsSucces(products : IProduct[]) {
        this.products = products;
        //console.log('Products',this.products);
        if (this._filteredByName == null || this._filteredByName == undefined) {
            this._filteredByName = '';
        } else {
            this._filteredByName = this._filteredByName.toLocaleLowerCase();
        }
        
        this.performProductFilter();
        //console.log('filteredProduct Products',this.filteredProduct);
    }

    onLoadProductsFailure(error:any) {
        this.products = [];
        //this.filteredProduct = [];
    }

    onClickOnProductDetail(p:IProduct) {
        console.log('onClickOnProductDetail called');
        this.router.navigate(['products','' + p.productId],{ queryParams:{ showOrHide: this.showOrHide, imageWidthPercent:this.imageWidthPercent, filteredByName:this.filteredByName } } );        
        // equivalent à 
        // <a [routerLink]="['/product-details', product.id]"   [queryParams]='{ showOrHide: showOrHide, imageWidthPercent:imageWidthPercent, filteredByName:filteredByName }'></a> dans le template
    }

    updateDescription(p:IProduct) {
        this.productService.updateProduct(p);
    }
}