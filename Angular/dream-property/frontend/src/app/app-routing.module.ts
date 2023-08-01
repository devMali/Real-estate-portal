import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { PropertyComponent } from './property/property.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PropAddComponent } from './prop-add/prop-add.component';
import { CityAreaAddComponent } from './city-area-add/city-area-add.component';
import { InquiryViewComponent } from './inquiry-view/inquiry-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewComponent } from './user-view/user-view.component';
import { SearchComponent } from './search/search.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { PropertyUpdateComponent } from './property-update/property-update.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserInquiryComponent } from './user-inquiry/user-inquiry.component';


const routes: Routes = [
  {path:'app',component:AppComponent},
  {
    path: 'search/:qry',component:SearchComponent,
  },

  { path:'auth' ,component:LogRegComponent,
    children: [
      {path:'',component:LoginComponent},
      {path:'login', component: LoginComponent},
      {path:'registrations', component: RegistrationComponent},
    ]
  },
  {path:'rent' , component: RentComponent},
  {path:'buy', component: BuyComponent},
  {path:'property', component: PropertyComponent},
  {path:'details/:id',component:InquiryComponent},
  {path:'' , component:PropertyComponent},
  {
    path:'account',component:UserPanelComponent,
    children :[
      {path:'',component:ProfileComponent},
      {path:'profile',component:ProfileComponent},
      {path:'inq-user',component:UserInquiryComponent},
    ]
  },
  {
    path:'admin',component:AdminPanelComponent,
    children : [
      {path:'',component:AdminHomeComponent},
      {path:'home',component:AdminHomeComponent},
      {path:'add-property' , component: PropAddComponent},
      {path:'view-property', component: PropertyViewComponent},
      {path:'update-property/:id',component:PropertyUpdateComponent},
      {path:'add-location' , component: CityAreaAddComponent},
      {path:'view-inquiry' , component:InquiryViewComponent},
      {path:'view-users', component:UserViewComponent}
    ]
  },
  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
