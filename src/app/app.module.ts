import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './Components/hompage/hompage.component';
import { HomepageiiComponent } from './Components/homepageii/homepageii.component';
import { CarsListComponent } from './Components/cars-list/cars-list.component';
import { CarDetailComponent } from './Components/car-detail/car-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageiiiComponent } from './Components/homepageiii/homepageiii.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HompageivComponent } from './Components/hompageiv/hompageiv.component';
import { HompagevComponent } from './Components/hompagev/hompagev.component';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    HomepageiiComponent,
    CarsListComponent,
    CarDetailComponent,
    HomepageiiiComponent,
    FooterComponent,
    HompageivComponent,
    HompagevComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
