import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCounter(){
    return this.cartService.getCounter();
  }

  getSumPrice(){
    return this.cartService.getsumPrice();
  }

  getCart_menu(){
    return this.cartService.getCart();
  }

  cart: any = this.cartService.getCart()

}
