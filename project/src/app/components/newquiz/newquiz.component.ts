import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.css']
})



export class NewquizComponent implements OnInit {

  imgSrc!: string;
  checkAnswer!: string;
  checkNumber: string = "4";
  show: boolean = true;
  choice3_dimmy!: string;
  choice4_dimmy!: string;

	stars: number = 5;
  array = Array(this.stars);
  
  productForm = new FormGroup({
    question: new FormControl(''),
    number: new FormControl(''),
    choice1: new FormControl(''),
    choice2: new FormControl(''),
    choice3: new FormControl(''),
    choice4: new FormControl(''),
    answer: new FormControl(''),
  });

  constructor(
    private dataService: DataService
  ) { }

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

  ngClassMethod1() { if (this.checkAnswer == "1") { return true } else { return false } }
  ngClassMethod2() { if (this.checkAnswer == "2") { return true } else { return false } }
  ngClassMethod3() { if (this.checkAnswer == "3") { return true } else { return false } }
  ngClassMethod4() { if (this.checkAnswer == "4") { return true } else { return false } }

  ngClassNumber2() {
    this.show = false
    this.choice3_dimmy = this.productForm.value.choice3 || ''
    this.choice4_dimmy = this.productForm.value.choice4 || ''
    this.productForm.controls['choice3'].reset()
    this.productForm.controls['choice4'].reset()
    if (this.checkAnswer == "3" || this.checkAnswer == "4") {
      this.checkAnswer = ""
    }
  }

  ngClassNumber4() {
    this.show = true
    this.productForm.controls['choice3'].setValue(this.choice3_dimmy);
    this.productForm.controls['choice4'].setValue(this.choice4_dimmy);
  }

  addData() {
    this.dataService.data.push(
      {
        question: this.productForm.value.question || '',
        number: parseInt(this.productForm.value.number || ''),
        choice1: this.productForm.value.choice1 || '',
        choice2: this.productForm.value.choice1 || '',
        choice3: this.productForm.value.choice1 || '',
        choice4: this.productForm.value.choice1 || '',
        answer: parseInt(this.productForm.value.answer || ''),
        picture: this.imgSrc || "https://cdn.discordapp.com/attachments/1026870373700083732/1029786860471464026/Group_26.png"
      }
    )
    alert("Add Data Success")
  }

  getAlldata(){
    return this.dataService.getAlldata()
  }

  clsData(){
    this.productForm.reset()
    this.productForm.controls['number'].setValue("4");
    this.imgSrc = ""
  }

}
