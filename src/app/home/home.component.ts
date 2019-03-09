import { Component, OnInit} from '@angular/core';

interface LangDesc {
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  deals: any;
  error: any;
  category = null;
  categories: any;
  dealsLoaded = false;
  productsLoaded = false;
  constructor(
  ) {}

  ngOnInit() {
    this.error = null;
  }

}
