import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityproductdetailsComponent } from './charityproductdetails.component';

describe('CharityproductdetailsComponent', () => {
  let component: CharityproductdetailsComponent;
  let fixture: ComponentFixture<CharityproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
