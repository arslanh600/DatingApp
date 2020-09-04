import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/AuthService.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model:any={};

  constructor(private service: AuthServiceService) { }

  ngOnInit() {
  }
  Login(){
    console.log(this.model);
    this.service.login(this.model).subscribe(
      x=>{
        console.log("User Logged in Successfulyy");
      },
      error => {
        console.log("User Logged in Failed");

      }
    )
  }

  loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log("Logged Out");
  }

}
