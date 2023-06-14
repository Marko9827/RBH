import { Component } from '@angular/core';
import  Products  from '../products.json';
// import fs  from '@angular';



interface rBH {
  id: String;
  title: String;
  price: String;
  img: String;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  products: rBH [] = Products;
  constructor() {
    console.log(this.products);
  }
  imagetobase64(url: String){
    let file = '';// fs.readFileSync( `${url}`,{encoding:"base64url"});
    return file;
  }
  
  removeFromCart(item: any) {
    // Implement the logic to remove the item from the cart
  }
}