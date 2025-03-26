import { CarsListComponent } from './Components/cars-list/cars-list.component';
import { CarDetailComponent } from './Components/car-detail/car-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './Components/hompage/hompage.component';

const routes: Routes = [

{path:'' ,redirectTo:'home' ,pathMatch:'full'},
{path:'home' ,component:HompageComponent ,title:'Homepage'},
{path:'list' ,component:CarsListComponent ,title:'Cars Category'},
{path:'selected/:id' ,component:CarDetailComponent ,title:'Car Details'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
