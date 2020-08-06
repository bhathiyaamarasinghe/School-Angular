import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarksTableService {

  apiEndpoint = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient
  ) { }

  getMarks(){
    return this.http.get(this.apiEndpoint+'/marks');
  }
  
  addMarks(newMark:any){
    return this.http.post(this.apiEndpoint+'/marks',newMark);
  }
}
