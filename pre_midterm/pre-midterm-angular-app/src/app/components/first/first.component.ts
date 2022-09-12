import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6201920',
      name: 'Patcharachart Jirasrisopa',
      gender: 'Male',
      birthyear: 2000,
      email: 'b6201920@g.sut.ac.th',
      phone: '0902571569',
      img: "https://i.ibb.co/n1xSPdC/me.jpg",
      address: 'Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  onAddClick($e?:any){
    alert(this.profile.address);
  }

  getAge(){
    return new Date().getFullYear() - this.profile.birthyear
  }

}
