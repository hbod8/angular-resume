import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  public data: any;

  constructor(private http: HttpClient) {
    this.http.get("assets/resume.json").subscribe( data => {
    console.log(data);
    this.data = data;
  });}
}
