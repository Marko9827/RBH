import { Component } from '@angular/core';

export  interface  cardsItem {
  id: String,
  title: String,
  price: String, 
  img: String
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})  

 
export class NavBarComponent {
  cardsItem = []
  constructor() {
      this.cardsItem = this.cardsItem;
  }
 
}
