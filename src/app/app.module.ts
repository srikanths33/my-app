import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmployyeRegistrationComponent } from './employye-registration/employye-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { IMDbComponent } from './imdb/imdb.component';
import { PokemanComponent } from './pokeman/pokeman.component';
import { SocialprofilesComponent } from './socialprofiles/socialprofiles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentIdCardComponent } from './student-id-card/student-id-card.component';
import { CreateStudentidComponent } from './create-studentid/create-studentid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    CircleComponent,
    BMIComponent,
    RectangleComponent,
    DirectivesComponent,
    EventregistrationComponent,
    EmployyeRegistrationComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    AmazonComponent,
    MailComponent,
    PintrestComponent,
    WeatherComponent,
    BlogComponent,
    IMDbComponent,
    PokemanComponent,
    SocialprofilesComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentIdCardComponent,
    CreateStudentidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
