import { Injectable } from '@angular/core';

@Injectable()
export class GlobalServiceService {
  constructor() {}

  data = [
    {
      ProductID: '1',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    }
  ];

  getProducts() {
    return this.data;
  }

  addProduct(prod){
    this.data.push(prod);
  }
}
