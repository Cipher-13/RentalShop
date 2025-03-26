import { Structure } from './../../Model/structure';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.ApiGetter(); // All Data
    this.ApiGetterLimiter();// only 4 items of data
    //this.ParameterizedApiGetter(id); // Single item
  }

  ApiGetter(): Observable<Structure[]> { return this.http.get<Structure[]>('https://freetestapi.com/api/v1/cars'); }
  ApiGetterLimiter(): Observable<Structure[]> { return this.http.get<Structure[]>('https://freetestapi.com/api/v1/cars?limit=4'); }
  ParameterizedApiGetter(id:number): Observable<Structure[]>{return this.http.get<Structure[]>(`https://freetestapi.com/api/v1/cars/${id}`);}
}
