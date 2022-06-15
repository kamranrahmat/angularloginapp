import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService) { }
  public serviceResponse:any;
  ngOnInit(): void {
  }
  getDetail(){
    this.user.getDetail().subscribe(
      (response:any)=>{
        console.log(response);
        this.serviceResponse=response;
        
      },
      (error:any)=>{
        console.log(error);
      }

    );
  }
}
