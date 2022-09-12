import { Component, OnInit } from '@angular/core';
import { productsModel } from 'src/app/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : productsModel = []

  constructor(private cartService: CartService) { 
    this.cart = this.cartService.getCart()
  }

  ngOnInit(): void {
  }

  getSumPrice(){
    return this.cartService.getsumPrice();
  }

}
