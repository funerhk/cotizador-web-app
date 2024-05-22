import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  @Input() viewMode = true;

  @Input() currentProducts: Products = {
    SKU: '',
    name: '',
    description: '',
    price: 0
  };

  message = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProduct(this.route.snapshot.params["SKU"]);
    }
  }

  getProduct(sku: any): void {
    this.productsService.getProductById(sku)
      .subscribe({
        next: (data) => {
          this.currentProducts = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateProduct(): void {
    this.message = '';

    this.productsService.updateProduct(this.currentProducts.SKU, this.currentProducts)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This product was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteProduct(): void {
    this.productsService.deleteProductById(this.currentProducts.SKU)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/products']);
        },
        error: (e) => console.error(e)
      });
  }

  toggleViewMode(): void {
    this.viewMode = !this.viewMode;
  }
}
