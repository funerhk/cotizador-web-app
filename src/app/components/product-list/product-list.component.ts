import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  products?: Products[];
  currentProducts: Products = {};
  currentIndex = -1;
  name = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productsService.getAllProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  setActiveProducts(products: Products, index: number): void {
    this.currentProducts = products;
    this.currentIndex = index;
  }


  searchName(): void {
    this.currentProducts = {};
    this.currentIndex = -1;

    this.productsService.getProductByName(this.name)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
