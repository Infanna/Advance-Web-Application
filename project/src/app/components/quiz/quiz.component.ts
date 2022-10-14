import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommentService } from 'src/app/service/comment.service';
import { DataService } from 'src/app/service/data.service';
CommentService


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  imgSrc: string = 'https://cdn.discordapp.com/attachments/1026870373700083732/1029786860471464026/Group_26.png'

  productForm = new FormGroup({
    name: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(
    private dataService: DataService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
  }

  getAlldata() {
    return this.dataService.getAlldata()
  }

  getAllcomment() {
    return this.commentService.getAllcomment().reverse()
  }

  addComment() {
    this.commentService.comment.push(
      {
        name: this.productForm.value.name || 'test',
        text: this.productForm.value.text || '',
      }
    )
    alert("Add Comment Success")
  }




}
