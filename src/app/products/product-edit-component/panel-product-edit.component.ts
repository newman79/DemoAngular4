import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'panel-product-edit',
  templateUrl: './panel-product-edit.component.html',
  styleUrls: ['./panel-product-edit.component.css']
})
export class PanelProductEditComponent implements OnInit {

  id:number;
  productSelected : IProduct;
  productSelectedInUpdate : IProduct;
  editionOrCreation : boolean;

  constructor(private route: ActivatedRoute, private router:Router, private productService: ProductService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log('PanelProductEditComponentComponent.ngOnInit(), id : ', this.id, this.route.snapshot);
    if (this.id == 0) {
      this.editionOrCreation = false;
      this.productSelected = new IProduct(0,'','GND','23/01/2016','',50,3,'');
      this.productSelectedInUpdate = new IProduct(0,'','GND','23/01/2016','',50,3,'');
    }
    else {
      this.editionOrCreation = true;
      this.productSelected = this.productService.getProduct(this.id);
      // copie le produit en cours de modification dans this.productSelected  AVANT qu'il ne soit modifié
      this.productSelectedInUpdate = new IProduct(this.productSelected.productId,this.productSelected.productName,this.productSelected.productCode,this.productSelected.releaseDate,this.productSelected.description,this.productSelected.price,this.productSelected.starRating,this.productSelected.imageUrl);
      // Equivalent : 
      // this.productSelected = <IProduct>{ 
      //    description: this.productSelectedInUpdate.description, 
      //    productName: ...
    }
  }


  areOriginAndEditedProductEquals():boolean {
    return this.productSelectedInUpdate.equalsExceptItsId(this.productSelected);
  }

  onCreateProduct() {
    this.productSelectedInUpdate.productId = this.productService.addProduct(this.productSelectedInUpdate);
    this.router.navigate(['products'], {preserveQueryParams : true});
  }

  onSaveProduct() {
    this.productSelected.description  = this.productSelectedInUpdate.description;
    this.productSelected.imageUrl     = this.productSelectedInUpdate.imageUrl;
    this.productSelected.price        = this.productSelectedInUpdate.price;
    this.productSelected.productCode  = this.productSelectedInUpdate.productCode;
    this.productSelected.productId    = this.productSelectedInUpdate.productId;
    this.productSelected.productName  = this.productSelectedInUpdate.productName;
    this.productSelected.releaseDate  = this.productSelectedInUpdate.releaseDate;
    this.productSelected.starRating   = this.productSelectedInUpdate.starRating;
    this.router.navigate(['products'], {preserveQueryParams : true});
  }

  generateFieldUpdatedOrNot(fieldName:string, p1 : IProduct, p2 : IProduct) {
    if (!this.editionOrCreation) {
      return false;
    }
    return this.productSelected[fieldName] != this.productSelectedInUpdate[fieldName] ? 'txtfieldModified' : 'notUpdated';
  }
}
