import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly ApiUrl="http://localhost:5000/api/auth/";
constructor( private http: HttpClient) { }

login(model : any){
 return this.http.post(this.ApiUrl + "login",model)
  .pipe(
    map((response:any) =>{
      //==========Getting Response from Database Token and Save it Loccally
      //==========We'll save only token Response===============
      const user  = response;
      if(user){
        localStorage.setItem("token",user.token);
      }

    }))
};

}


