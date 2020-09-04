import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from '../_services/AuthService.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegisterMode = new EventEmitter();
  model:any ={};

  constructor(private service: AuthServiceService) { }

  ngOnInit() {
  }

  register(){

    this.service.register(this.model).subscribe(()=>{
      console.log("User Addedd Successfully"),
      error=>{
        console.log(error);
      }
    });
  }
  cancel(){

    this.cancelRegisterMode.emit(false);
  }

}
