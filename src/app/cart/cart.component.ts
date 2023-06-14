import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  
  removeFromCart(item: any) {
    // Implement the logic to remove the item from the cart
  }
}