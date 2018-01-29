import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductGardService implements CanActivate {
    
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let askedProductId = +route.params['id'];
        //on peut faire aussi ça :   let askedProductId = +route.url[1].path; 
        console.log('ProductGardService.canActivate() : askedProductId :', askedProductId);
        if (askedProductId < 0 || isNaN(askedProductId)) {
            alert('Alerte depuis ProductGardService.canActivate() : l identifiant de produit ' + askedProductId + ' est invalide');
            this.router.navigate(['products'], {preserveQueryParams : true});
            return false;
        }

        return true;
    }
    
}