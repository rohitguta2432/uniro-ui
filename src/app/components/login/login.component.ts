import { Component, OnInit } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    //console.log(this.user);

    //console.log(this.user);

    this.auth.getUserDetails(this.user).subscribe(
      response => {
        if(response.status == '200')
        {
          console.log(response.data.user)
          console.log(response.data)
          console.log(response)
          localStorage.setItem('currentUser',JSON.stringify(response.data.user));
           this.router.navigate(["/home"]);
        }
      },Error=>{
        this.errorMessage = "error:username or password is incorrect";
      });
  }
}
