import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  readonly ApiURL ="http://localhost:5000/api/values";
  values: any;

  getValues(){
    this.http.get(this.ApiURL).subscribe(x => {
      this.values = x;
      console.log(this.values);
    },
     error => {
       console.log(error);
      
    });

  }



}
