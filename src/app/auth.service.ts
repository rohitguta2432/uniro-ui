import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./model/model.user";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { AppComponent } from "./app.component";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  api="api/auth/";

getUserDetails(user: User):Observable<any> {
    //console.log('user '+ user);
    const api="api/auth"
    return this.http.post<User>(api,user);
  }

  logout():Observable<any> {
    // remove user from local storage to log user out
     return this.http.post(this.api+"logout",{}).pipe(map((response: Response) => {
    localStorage.removeItem('currentUser');
    }));

  
}

}
