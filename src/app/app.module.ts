import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { AuthService } from "./auth.service";
import { HttpClient } from "selenium-webdriver/http";
import { FormsModule } from "@angular/forms";
import {RouterModule,Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from "./_guards/auth.guard";


const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,
    children:[
      {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}
    ]
  }];

@NgModule({
  declarations: [AppComponent, HomeComponent,LoginComponent, HeaderComponent, SidebarComponent, FooterComponent, DashboardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(routes)],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}