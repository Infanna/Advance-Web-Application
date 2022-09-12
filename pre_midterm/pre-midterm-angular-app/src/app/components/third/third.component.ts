import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { productsModel } from 'src/app/product.model';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  product : productsModel = []

  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) {}


  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productService.getAllProduct()
  }

  addToCart(p_id: number){
    this.cartService.add(p_id)
    this.productService.products[p_id].quantity -= 1
  }

  getCounter(){
    return this.cartService.getCounter();
  }

}
