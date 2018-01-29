import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AuthenticationService } from './authentification.service';
import { User } from './iusers';
import { UserService } from './user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'panel-login.component.html'
})
 
export class PanelLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private userService: UserService) {} 
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // Pour mettre des Users en localstorage, ca invoque un interceptor http : fakeBackend.service.ts, situé dans shared        
        let newUser = new User();
        newUser.id=1;    newUser.firstName="Xavier1";    newUser.lastName="Marquis1";    newUser.username="xmarquis1";     newUser.password="p1";
        this.userService.create(newUser).subscribe(data => {}, error => {});

        newUser = new User();
        newUser.id=2;    newUser.firstName="Xavier2";    newUser.lastName="Marquis2";    newUser.username="xmarquis2";     newUser.password="p2";
        this.userService.create(newUser).subscribe(data => {}, error => {});        
        
        console.log('Users created in localStorage');
    }
 

    login() {
        // Ce code permet de visualiser tous les utilisateurs créés en localStorage, c'est aussi intercepté par : fakeBackend.service.ts, situé dans shared 
        // this.userService.getAll().subscribe( data => { console.log('Users created', data); },          error => {console.log(error);} );

        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    alert(error);
                    this.loading = false;
                });
    }
}