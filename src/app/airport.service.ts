import { Injectable } from '@angular/core';
import { Destination } from './pages/ride-services/destination';
import { DESTINATIONS } from './pages/mock-destinations';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  getDestinations(): Observable<Destination[]> {
    return of(DESTINATIONS);
  }
  constructor() { }
}
