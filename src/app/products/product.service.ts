import { IProduct } from "./iproduct";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { error } from "util";
import { environment } from '../../environments/environment';

@Injectable(

)
export class ProductService {

    serviceUrl:string = environment.API_BASE_PATH + '/api/products/products.json';
    serviceUrl2:string = './api/products/products2.json';

    lastProductSearch : IProduct[];
    /*
    [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]
    */

    constructor(private _http : HttpClient) { } // créer un attribut d'instance _http et injecte l'instance HttpClient qu'angular a initialisé en singleton

    getProducts(): Observable<IProduct[]> {
        if (this.lastProductSearch != null && this.lastProductSearch !=undefined) {
            console.log('ProductService.getProducts() : this.lastProductSearch is yet loaded', this.lastProductSearch);
            return Observable.of(this.lastProductSearch);
        }

        return this._http.get<IProduct[]>(this.serviceUrl)
        .do(data=> 
                { 
                    console.log('All products:',JSON.stringify(data));
                    this.lastProductSearch = <IProduct[]>data;
                }
        )
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse, o:Observable<IProduct[]>) {
        return Observable.throw(err.message);
    }

    getProducts2(): Observable<IProduct[]> {
        let res = this._http.get<IProduct[]>(this.serviceUrl2);
        return res;
    }


    getProduct(productId : number): IProduct {

        if (this.lastProductSearch == null || this.lastProductSearch.length == 0) {
            return null;
        }

        let result = null;
        this.lastProductSearch.forEach(element => {
            if (element.productId == productId) {
                result = element;
            }                
        });

        return result;
    }

    // Nothing to do here : the model is in fact this.lastProductSearch array, whose elements are given to other components
    // And lastProductSearch elements properties are data binded, so update made by the use are made directlu to elements of lastProductSearch
    // However, if ProductService was linked to a real back end, a backend http query would have a meaning.
    updateProduct(p:IProduct) {} 


    addProduct(p:IProduct):number {
        if (this.lastProductSearch == null || this.lastProductSearch.length == 0) {
            return;
        }
        let maxId = 0;
        this.lastProductSearch.forEach(element => { maxId = Math.max(maxId, element.productId) } );
        p.productId = maxId + 1;

        this.lastProductSearch.push(p);
        return p.productId;
    } 
}