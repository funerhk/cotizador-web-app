import { Component } from '@angular/core';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  products: Products = {
    SKU:'',
    name: '',
    description: '',
    price: 0
  };
  submitted = false;

  constructor(private productsService: ProductsService) { }

  saveProduct(): void {
    const data = {
      name: this.products.name,
      description: this.products.description,
      price: this.products.price
    };

    this.productsService.createProduct(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.products = {
      SKU:'',
      name: '',
      description: '',
      price: 0
    };
  }

}
