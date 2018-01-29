import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';


@Component({
    // Le selector n'a plus de sens depuis que nous avons mis en place le routing
    // selector:'panel-productDetail',
    templateUrl:'panel-productDetail.component.html'
})
export class PanelProductDetailComponent implements OnInit {

    id:number;
    product : IProduct;
    productMap : any;
    imageUrl : string;
    identifiant : number;
    private sub: any;    

    constructor(private route: ActivatedRoute, private router:Router, private productService : ProductService) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // On peut aussi faire : 
            // this.id = +this.route.snapshot.paramMap.get('id');

            // In a real app: dispatch action to load the details here.
            console.log('Display of product ', this.id);
            let productSelected = this.productService.getProduct(this.id);
            if (productSelected !== null) {
                this.product = productSelected;
                this.productMap = [
                    {name: 'Identifiant', value:this.product.productId}, 
                    {name:'Nom',value: this.product.productName},
                    {name:'Code',value: this.product.productCode},
                    {name:'Prix',value: this.product.price},
                    {name:'Description',value: this.product.description},
                    {name:'Date de sortie',value: this.product.releaseDate},
                    {name:'Succès',value: this.product.starRating},
                    {name:'imageUrl',value: this.product.imageUrl}
                ];
                this.imageUrl = this.product.imageUrl;
                this.identifiant = this.product.productId;
            }                
         });
    }

    navigateToProducts(): void {
        this.router.navigate(['products'], {preserveQueryParams : true});
    }
}