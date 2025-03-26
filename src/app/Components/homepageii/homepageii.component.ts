import { Structure } from './../../Model/structure';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-homepageii',
  templateUrl: './homepageii.component.html',
  styleUrls: ['./homepageii.component.css']
})
export class HomepageiiComponent {

  carslist: Structure[] = [];
  Error: string = " ";
  image:string="assets/Images/showroom.jpeg"

  constructor(private Data: DataService) { this.Subscriber(); }


  Subscriber(): void {

    console.log('Calling API...');

    this.Data.ApiGetterLimiter().subscribe({
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
