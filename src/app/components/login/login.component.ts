import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

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
  constructor(private loginServie:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('form is submited')
    if(this.credentials.username!='' && this.credentials.password!=''){
      console.log('We have to submit the foem');

      this.loginServie.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token);
          this.loginServie.loginUser(response.token);
          window.location.href="/dashboard"
        },
        error=>{
          console.log(error);
        }

      );
      
    }else{
      console.log('incomplete fields');
    }
  }
}
