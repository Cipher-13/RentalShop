import { Structure } from './../../Model/structure';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  index: number = 0;
  carslist: any = {};
  Error:string="  ";

  constructor(
    private Data: DataService,
    private Ar: ActivatedRoute) {

      this.index=this.Ar.snapshot.params['id']
      this.Subscriber()

  }
  Subscriber(): void {

    console.log('Calling API...');

    this.Data.ParameterizedApiGetter(this.index).subscribe({
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
