import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  val : any;
  constructor() { }

  setValue(val: any) {
    this.val = val;
  }
  getValue() {
    return this.val;
  }
}
