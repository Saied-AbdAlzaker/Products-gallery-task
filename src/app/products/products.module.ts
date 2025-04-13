import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
