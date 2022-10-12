import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.css']
})



export class NewquizComponent implements OnInit {

  imgSrc!: string;
  check!: string;
  checknumber: string = "4";
  show: boolean = true;

  productForm = new FormGroup({
    question: new FormControl(''),
    number: new FormControl(''),
    choice1: new FormControl(''),
    choice2: new FormControl(''),
    choice3: new FormControl(''),
    choice4: new FormControl(''),
    answer: new FormControl(''),
  });

  ngOnInit(): void {

  }

  onChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const render = new FileReader();
      render.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      render.readAsDataURL(event.target.files[0])
    }
  }

  onClick() {
    this.show = !this.show
  }

  ngClassMethod1() { if (this.check == "1") { return true } else { return false } }
  ngClassMethod2() { if (this.check == "2") { return true } else { return false } }
  ngClassMethod3() { if (this.check == "3") { return true } else { return false } }
  ngClassMethod4() { if (this.check == "4") { return true } else { return false } }

  ngClassNumber2() { 
    this.show = false
    if(this.check == "3" || this.check == "4"){
      this.check = ""
    }  
    
  }
  ngClassNumber4() { 
    this.show = true  
  }


}
