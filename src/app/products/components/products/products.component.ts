import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: IProduct | any;
  searchItem:string='';

  constructor(private _ProductsService: ProductService, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._ProductsService.allProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res;
      }, error: (err) => {
        console.log(err);
        this._ToastrService.error('data fetch fails.', 'Error!')
      }, complete: () => {
        this._ToastrService.success('data fetch success.', 'Success')
      }
    })
  }

}
