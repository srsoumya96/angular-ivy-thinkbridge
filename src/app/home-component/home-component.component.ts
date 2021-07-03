import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(private global: GlobalServiceService) {}

  products = [];
  editItem: boolean;
  pName;
  pDesc;
  addPopup = false;
  ngOnInit() {
    this.products = this.global.getProducts();
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
    this.global.addProduct(prod);
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
      }
    });
    this.editItem = true;
    this.toBeEdited = id;
  }

  saveEntry() {
    this.editItem = false;
    this.products.forEach(e => {
      if (e.ProductID == this.toBeEdited) {
        e.ProductName = this.pName;
        e.ProductDesc = this.pDesc;
        return;
      }
    });
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
