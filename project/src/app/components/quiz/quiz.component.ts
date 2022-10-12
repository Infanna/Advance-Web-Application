import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  comment!: string
  imgSrc!: string;
  prefix: string[] = ['Mr.','Mrs.','Ms.'];


  productForm = new FormGroup({
    prefix: new FormControl(''),
    gender: new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    birthday : new FormControl(''),
    tel : new FormControl(''),
   });

  ngOnInit(): void {
  }

  onChange(event:any) {
    if (event.target.files && event.target.files[0]) {
      const render = new FileReader();
      render.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      render.readAsDataURL(event.target.files[0])
    }
  }

}
