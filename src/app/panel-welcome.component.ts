import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";
import { OnInit } from "@angular/core";
import { IProduct } from "./products/iproduct";
import { SuperTable, ISuperTableColumn } from 'ngx-super-table';

@Component({
    selector:'panel-welcome',
    templateUrl: './panel-welcome.component.html'
})
export class PanelWelcomeComponent implements OnInit {

    rows = [ // ici, on pourrait mettre les résultats de products
        { name: 'thing1', age: 7 },
        { name: 'thingx', age: 7 },
        { name: 'cat1', age: 10 },
        { name: 'cat2', age: 10 },
        { name: 'cat3', age: 10 },
        { name: 'cat4', age: 10 },
        { name: 'cat5', age: 10 },
        { name: 'cat6', age: 10 },
        { name: 'cat7', age: 10 },
        { name: 'cat8', age: 10 },        
        {}        // bug : la derniere valeur ne s'affiche pas
      ];
      columns: ISuperTableColumn[] = [
      {
        id: 'name',
        key: 'name',
        label: 'Name'
      },
      {
        id: 'age',
        key: 'age',
        label: 'Age'
      },
      {
        id: 'prix',
        key: 'prix',
        label: 'Prix'
      }
    ];
    
    options = {autoHeight: true }



    constructor(private productService : ProductService) {}

    lesProduits : IProduct[];

    ngOnInit(): void {
        this.productService.getProducts2().subscribe(data => this.lesProduits = data);        
    }
    
}