import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Waste Food Management Application';
  donor: boolean = false;
  charity: boolean = false;
  main: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.ngOnInitCheckCondition();
      }

      if (event instanceof NavigationEnd) {
        this.ngOnInitCheckCondition();
      }
    });
  }
  ngOnInit() {
    this. ngOnInitCheckCondition();
  }
  ngOnInitCheckCondition() {
    let employee = JSON.parse(localStorage.getItem("empDetails"));

    if (employee['userType'] == 'donor') {
      this.donor = true;
      this.charity = false;
      this.main = false;
    }
    else if (employee['userType'] == 'charity') {
      this.donor = false;
      this.charity = true;
      this.main = false;

    } else {
      this.donor = false;
      this.charity = false;
      this.main = true;
    }
  }
  


}