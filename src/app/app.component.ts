import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as carditem from '../assets/data/data.json';
//'/assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RBH';
  cardsItem2: any;
  url: any  = "/assets/data/data.json";
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
       this.cardsItem2 = res;
    });
  }
}
