import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { PropertyComponent } from './property/property.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';
import {IvyCarouselModule} from 'carousel-angular';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PropAddComponent } from './prop-add/prop-add.component';
import { CityAreaAddComponent } from './city-area-add/city-area-add.component';
import { InquiryViewComponent } from './inquiry-view/inquiry-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FileUploadModule } from 'ng2-file-upload';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SearchComponent } from './search/search.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { FooterComponent } from './footer/footer.component';
import { PropertyUpdateComponent } from './property-update/property-update.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserInquiryComponent } from './user-inquiry/user-inquiry.component';
// import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [

    AppComponent,
    RegistrationComponent,
    LoginComponent,
    RentComponent,
    BuyComponent,
    PropertyComponent,
    InquiryComponent,
    LogRegComponent,
    NavbarComponent,
    ProfileComponent,
    NotFoundComponent,
    AdminPanelComponent,
    PropAddComponent,
    CityAreaAddComponent,
    InquiryViewComponent,
    AdminHomeComponent,
    UserViewComponent,
    SearchComponent,
    PropertyViewComponent,
    FooterComponent,
    PropertyUpdateComponent,
    UserPanelComponent,
    UserInquiryComponent,
  ],
  imports: [
    GooglePlaceModule,
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
