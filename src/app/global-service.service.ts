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
    return this._http.get('https://mockend.com/srsoumya96/angular-ivy-thinkbridge/data');
    // return this.data;
  }

  addProduct(prod) {
    this.data.push(prod);
    return this._http.post(
      'https://my-json-server.typicode.com/srsoumya96/angular-ivy-thinkbridge/data',
      {
        ProductID: '111',
        ProductName: 'AAA',
        ProductDesc: 'ZZZZZ',
        id: 2
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  editProduct(id) {
    return this._http.patch(
      'https://my-json-server.typicode.com/srsoumya96/testJSONDemo/data/1',
      {
        ProductName: 'BBB'
      }
    );
  }
}
