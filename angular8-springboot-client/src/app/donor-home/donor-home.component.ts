import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.css']
})
export class DonorHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private homePageComponent: HomePageComponent) { }

  ngOnInit() {
    this.toLoad();
  }
  toLoad() {
    this.homePageComponent.ngOnInitCheckCondition();
    this.router.navigate(['/donorHome']);
  }


}
