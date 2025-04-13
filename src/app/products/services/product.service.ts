import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'https://fakestoreapi.com';

  constructor(private _HttpClient: HttpClient) { }

  allProducts(): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(`${this.baseUrl}/products`);
  }

  ProductById(id: number): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(`${this.baseUrl}/products/${id}`);
  }
}
