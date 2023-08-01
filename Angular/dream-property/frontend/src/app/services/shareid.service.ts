import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareidService {
  id : number = 0
  role : string = 'user'
  constructor() { }

  setId(data : number){
    this.id = data;
  }
  getId(){
    return this.id;
  }

  setRole(data : string){
    this.role = data;
  }
  getRole(){
    return this.role;
  }
}
