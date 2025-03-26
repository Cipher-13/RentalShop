import { Structure } from './../../Model/structure';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {
  carslist: Structure[] = [];
  Error: string = " ";
  image:string="assets/Images/showroom.jpeg"

  constructor(private Data: DataService) { this.Subscriber(); }


  Subscriber(): void {

    console.log('Calling API...');

    this.Data.ApiGetter().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.carslist = res;
      },

      error: (err) => {
        console.error('API Call Failed:', err);
        this.Error = 'Error Fetching: ' + err.message;
      }

    });

  }
}
