import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalServiceService {
  constructor(private _http: HttpClient) {}

  data = [
    {
      ProductID: '1',
      ProductName: 'AAA',
      ProductDesc: 'ZZZZZ'
    }
  ];

  getProducts() {
    return this._http
      .get(
        'https://my-json-server.typicode.com/srsoumya96/testJSONDemo/employee',
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
      );
    // return this.data;
  }

  addProduct(prod) {
    this.data.push(prod);
  }
}
