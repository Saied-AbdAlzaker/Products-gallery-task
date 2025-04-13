import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | any;
  productId: number = 0;

  constructor(private _ProductsService: ProductService, private _ToastrService: ToastrService, private _ActivatedRoute: ActivatedRoute) {
    console.log(_ActivatedRoute.snapshot.params['id']);
    this.productId = _ActivatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getProductById()
  }

  getProductById() {
    this._ProductsService.ProductById(this.productId).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      }, error: (err) => {
        console.log(err);
        this._ToastrService.error('data fetch fails.', 'Error!')
      }, complete: () => {
        this._ToastrService.success('data fetch success.', 'Success')
      }
    })
  }

}
