import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddproductdetailsService } from '../addproductdetails.service';
import { Product } from '../product';
import { Updatedetails } from '../updatedetails';

@Component({
  selector: 'app-charityproductdetails',
  templateUrl: './charityproductdetails.component.html',
  styleUrls: ['./charityproductdetails.component.css']
})
export class CharityproductdetailsComponent implements OnInit {

  product: Product = new Product();
  products: Observable<Product[]>;
  updatedetails: Updatedetails = new Updatedetails();

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: AddproductdetailsService) { }

  ngOnInit() {
    let employee = JSON.parse(localStorage.getItem("empDetails"));
    this.products = this.productService.getAllPostDetails();
  }

  updateDetails(id: number, status: string) {
    this.updatedetails.id = id;
    this.updatedetails.status = status;

    this.productService.updatePostStatus(id, this.updatedetails)
      .subscribe(data => {
        console.log(data);
        alert('Status Update Sucessfully!!');
        this.list();
      }, error => console.log(error));

  }


  list() {
    location.reload();
    this.products = this.productService.getAllPostDetails();
    this.router.navigate(['/charityProductDetails']);
  }
}

