import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegisterMode = new EventEmitter();
  model:any ={};

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
  }
  cancel(){

    this.cancelRegisterMode.emit(false);
  }

}
