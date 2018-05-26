import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  fruits=new Array("images");
  number=this.fruits.length;

  constructor() { }

  ngOnInit() {
  }

}
