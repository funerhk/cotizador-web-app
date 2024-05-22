import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getProductById(sku: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${sku}`);
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, productData);
  }

  getProductByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/${name}`);
  }

  updateProduct(sku: any, productData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${sku}`, productData);
  }

  deleteProductById(sku: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${sku}`);
  }
}
