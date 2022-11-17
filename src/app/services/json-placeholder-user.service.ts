import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import urls from "../constants/ServerURL";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderUserService {

  constructor(private http:HttpClient) { }

   loadUsers():Observable<any> {
     let respObservable = this.http.get(`${urls.jsonPlaceholderBaseURL}/users`);
     return respObservable;
  }

}
