import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { productsModel } from 'src/app/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
   type: new FormControl(''),
   id : new FormControl('',[Validators.required]),
   name : new FormControl('',[Validators.required]),
   detail: new FormControl('',[Validators.required]),
   quantity: new FormControl('',[Validators.required,Validators.max(50),Validators.min(1)]),
   price: new FormControl('',[Validators.required,Validators.max(100000),Validators.min(1)])
    
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  get quantity() {return this.productForm.get('quantity')}

  constructor(
    private productService : ProductService
  ) { }


  ngOnInit(): void {
  }


  addProduct(){
    this.productService.products.push(
      {
      type: this.productForm.value.type || '', 
      id: this.productForm.value.id || '', 
      name: this.productForm.value.name || '', 
      detail: this.productForm.value.detail || '', 
      quantity: parseInt(this.productForm.value.quantity || ''), 
      price: parseInt(this.productForm.value.price || ''),
      }
    )

    alert("Add product succeed")
    // if(this.productForm.value.id == ''){
    //   alert("ID is required.");
    // }else if(this.productForm.value.name == ''){
    //   alert("Name is required.");
    // }else if(this.productForm.value.detail == ''){
    //   alert("Detail is required.");
    // }else if(this.productForm.value.quantity == ''){
    //   alert("Quantity is required.");
    // }else if(parseInt(this.productForm.value.quantity || '') < 1 || parseInt(this.productForm.value.quantity || '') > 50){
    //   alert("Quantity must be in [1-50].");
    // }else if(this.productForm.value.price == ''){
    //   alert("Price is required.");
    // }else if(parseInt(this.productForm.value.price || '') < 1 || parseInt(this.productForm.value.price || '') > 100000){
    //   alert("Price must be in [1-100000].");
    // }
    // else{
    //   this.productService.products.push(
    //     {
    //     type: this.productForm.value.type || '', 
    //     id: this.productForm.value.id || '', 
    //     name: this.productForm.value.name || '', 
    //     detail: this.productForm.value.detail || '', 
    //     quantity: parseInt(this.productForm.value.quantity || ''), 
    //     price: parseInt(this.productForm.value.price || ''),
    //     }
    //   )
    // }

  }

}
