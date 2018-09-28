
import {Router,CanActivate,RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const userRole=localStorage.getItem('currentUser');
        
        return true;
    }
}