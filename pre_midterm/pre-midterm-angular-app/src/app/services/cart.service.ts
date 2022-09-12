import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {


  counter : number = 0 ;
  sumPrice : number = 0 ;
  cart : productsModel = []


  constructor(private productService: ProductService) { }

  // add(p_id: number){
  //   console.log('add id:'+p_id)
  //   this.cart.push(this.productService.getProd(p_id))
  //   this.counter = this.cart.length;
  // }

  add(p_id : number){
    console.log('Add product id: '+p_id+' to cart');
    this.cart.push(this.productService.getSomeProduct(p_id));
    this.sumPrice += this.productService.getSomeProduct(p_id).price;
    this.counter = this.cart.length;
  }

  getCounter(){
    return this.counter
  }

  getsumPrice(){
    return this.sumPrice
  }

  getCart(){
    return this.cart
  }
    

}
