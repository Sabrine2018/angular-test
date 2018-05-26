import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule, Routes} from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { ImagesService } from './images.service';
import {HttpClientModule} from '@angular/common/http';


const routes:Routes =[
  {path:'principal',component:PrincipalComponent},
  {path:'home',component:HomeComponent},
  {path:'images',component:ListImagesComponent},
  {path:'',component:PrincipalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    ListImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
