import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { CharityHomeComponent } from './charity-home/charity-home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { CharityproductdetailsComponent } from './charityproductdetails/charityproductdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'login', component:  UserLoginComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'donorHome', component: DonorHomeComponent },
  { path: 'charityHome', component: CharityHomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'viewPost', component: PostdetailsComponent },
  { path: 'charityProductDetails', component: CharityproductdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
