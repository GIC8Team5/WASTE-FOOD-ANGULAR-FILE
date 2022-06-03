import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddproductdetailsService } from '../addproductdetails.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  addSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private productService: AddproductdetailsService) { }

  ngOnInit() {
  }

  addProductDetails() {
    let employee = JSON.parse(localStorage.getItem("empDetails"));
    this.product.address = employee['foodAddress'];
    this.product.emailId = employee['emailId'];
    this.product.name = employee['firstName'] + ' ' + employee['lastName'];
    this.product.phNumber = employee['phNumber'];
    this.product.status = 'Pending';
    this.productService.addProductDetails(this.product).subscribe(data => {
      alert("Product was added sucessfully");
      this.addSubmitted = true;
      this. list();
    }, error => {
      alert("OOPS! Product added was UnSucessfull");
      this. list();
    }
    )
  }
  list() {
    location.reload();
    this.router.navigate(['/addProduct']);
  }
}