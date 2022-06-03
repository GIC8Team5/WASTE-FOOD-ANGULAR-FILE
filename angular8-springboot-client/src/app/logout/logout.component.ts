import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  // constructor(private route: ActivatedRoute, private router: Router, private homePageComponent: HomePageComponent) { }
  constructor(private route: ActivatedRoute, private router: Router, private homePageComponent: HomePageComponent) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        localStorage.clear();
        this.homePageComponent.ngOnInitCheckCondition();
        location.reload();
      }

      if (event instanceof NavigationEnd) {
        localStorage.clear();
        this.homePageComponent.ngOnInitCheckCondition();
        location.reload();
      }
    });
  }
  ngOnInit() {
    localStorage.clear();
    this.toLoad();
  }
  toLoad() {    
    this.homePageComponent.ngOnInitCheckCondition();
    this.router.navigate(['/logout']);
    
  }





}
