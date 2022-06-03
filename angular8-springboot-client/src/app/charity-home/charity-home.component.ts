import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-charity-home',
  templateUrl: './charity-home.component.html',
  styleUrls: ['./charity-home.component.css']
})
export class CharityHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private homePageComponent: HomePageComponent) { }

  ngOnInit() {

    this.toLoad();
  }
  toLoad() {
    this.homePageComponent.ngOnInitCheckCondition();
    this.router.navigate(['/charityHome']);
  }


}
