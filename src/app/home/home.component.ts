import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
// import { Http } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fruits = new Array("images", "Home.jpg");
  number = this.fruits.length;

  constructor(private _images: ImagesService) { }


  ngOnInit() {

  }
  getList() {
    this._images.getImages();
  }
}
