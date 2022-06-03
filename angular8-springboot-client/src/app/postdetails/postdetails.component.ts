import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddproductdetailsService } from '../addproductdetails.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { Product } from '../product';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: AddproductdetailsService,  private homePageComponent: HomePageComponent) { }

  ngOnInit() {
    let employee = JSON.parse(localStorage.getItem("empDetails"));
    this.products = this.productService.getPostDetails(employee['emailId']);
    this.list();
  }
  deleteDetails(id: number) {
    this.productService.deletePostDetails(id)
      .subscribe(
        data => {
          console.log(data);
          this.list();
          location.reload();
        },
        error => console.log(error));
  }

  list() {    
    this.homePageComponent.ngOnInitCheckCondition();
    this.router.navigate(['/viewPost']);
  }
}
