import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee: any = [
    {"id":"1", "employee_name":"WdqBvFe", "employee_salary":"797", "employee_age":"36"},
    {"id":"2", "employee_name":"All", "employee_salary":"999", "employee_age":"99"},
    {"id":"3", "employee_name":"ถือว่าเขียนออกมาหมด", "employee_salary":"12345", "employee_age":"21"},
  ]

}
