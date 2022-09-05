import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private protectsService:ProductsService) { }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.protectsService.getAllProduct()
  }

}
