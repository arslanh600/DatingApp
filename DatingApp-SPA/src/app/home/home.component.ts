import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  constructor() { }

  ngOnInit() {
  }
  modeToggle(){
    this.registerMode =true;
    // this.registerMode =!this.registerMode;
  
  }

  cancelRegisterMode(register: boolean){
    this.registerMode = register;

  }
}
