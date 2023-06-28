import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
  //  import fs  from 'fs'; 
  



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {  
  cardsItem3: any;
  url: any  = "/assets/data/data.json";
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
       this.cardsItem3 = res;
    });
  }
  
  imagetobase64(url: String){
    let file =  url;//fs.readFileSync( `${url}`,{encoding:"base64url"});
    return  file;
  }
  
  removeFromCart(item: any) {
    // Implement the logic to remove the item from the cart
  }
}