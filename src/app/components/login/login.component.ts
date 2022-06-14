import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('form is submited')
    if(this.credentials.username!='' && this.credentials.password!=''){
      console.log('We have to submit the foem');
      
    }else{
      console.log('incomplete fields');
    }
  }
}
