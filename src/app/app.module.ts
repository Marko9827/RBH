import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HomeFoodSliderComponent } from './home-food-slider/home-food-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsCardsComponent } from './products-cards/products-cards.component';
import { Routes } from '@angular/router';
import { CardsModalComponent } from './cards-modal/cards-modal.component';

const appRoute: Routes = [
  {path: 'Home', component: AppComponent},
  
]

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    HomeFoodSliderComponent,
    NavBarComponent,
    ProductsCardsComponent,
    CardsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
   eronelit_api: String = "https://app32424259353demo.eronelit.com/api/";

  http_a(url: '', callback: Function) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}
