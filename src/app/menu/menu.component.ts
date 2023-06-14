import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'test', price: 45 } // after run from rest api
  ];
  
  addToCart(item: any) {
    // Implement the logic to add the item to the cart
  }
}