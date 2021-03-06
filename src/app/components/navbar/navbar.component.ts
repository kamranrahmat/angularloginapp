import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
  }
  logOutUser(){
    this.loginService.logout();
    location.reload();
  }

}
