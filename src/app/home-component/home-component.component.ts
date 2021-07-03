import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  id: any;
  constructor(private global: GlobalServiceService) {}

  products = [];
  editItem: boolean;
  pName;
  pDesc;
  addPopup = false;
  ngOnInit() {
    this.global.getProducts().subscribe((d: any) => {
      this.products = d;
      console.log(d);
    });
  }

  addEntry() {
    this.addPopup = true;
  }

  addProduct() {
    let prod = {
      ProductID: (this.products.length + 1).toString(),
      ProductName: this.pName,
      ProductDesc: this.pDesc
    };
    this.global.addProduct(prod).subscribe(res => {
      console.log(res);
    });
    this.ngOnInit();
    this.addPopup = false;
    console.log(this.products);
  }

  toBeEdited;
  editEntry(id) {
    // alert('Edit Entry Component');
    this.products.forEach(e => {
      if (e.ProductID == id) {
        this.pName = e.ProductName;
        this.pDesc = e.ProductDesc;
        this.id = e.id;
      }
    });
    this.editItem = true;
    this.toBeEdited = id;
  }

  saveEntry() {
    this.editItem = false;
    this.global.editProduct(this.id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    });
    // this.products.forEach(e => {
    //   if (e.ProductID == this.toBeEdited) {
    //     e.ProductName = this.pName;
    //     e.ProductDesc = this.pDesc;
    //     return;
    //   }
    // });
  }

  deleteEntry(id) {
    let confirmation = confirm('Delete Entry Component');
    let index;
    if (confirmation) {
      this.products.forEach(e => {
        if (e.ProductID == id) {
          this.products.splice(index, 1);
        }
        index += 1;
      });
    }
  }
}
