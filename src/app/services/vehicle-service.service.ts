import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { environmentVehicle } from 'src/environments/environment-vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  private apiURL = environmentVehicle.apiURL;

  constructor(private http: HttpClient) { }

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //http API Errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  //Methods to consume API
  getList(): Observable<Vehicle[]> {
    return this.http
      .get<Vehicle[]>(this.apiURL)
      .pipe(retry(2), catchError(this.handleError));
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http
      .get<Vehicle>(this.apiURL + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  createVehicle(data: any): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(this.apiURL, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http
      .delete<void>(this.apiURL + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
}
