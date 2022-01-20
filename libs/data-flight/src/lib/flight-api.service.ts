import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './Models/flight.model';

const FLIGHTS_DATA = [
  {
    id: 1,
    from: 'Visakapatnam',
    to: 'Mallorca',
    date: new Date().toISOString(),
  },
  {
    id: 2,
    from: 'Washington',
    to: 'Barcelona',
    date: new Date().toISOString(),
  },
  {
    id: 3,
    from: 'Mallorca',
    to: 'Ibiza',
    date: new Date().toISOString(),
  },
  {
    id: 4,
    from: 'Visakapatnam',
    to: 'Tirupathi',
    date: new Date().toISOString(),
  },
  {
    id: 5,
    from: 'Delhi',
    to: 'Visakapatnam',
    date: new Date().toISOString(),
  },
  {
    id: 6,
    from: 'Barcelona',
    to: 'Chennai',
    date: new Date().toISOString(),
  },
  {
    id: 7,
    from: 'Delhi',
    to: 'Singapore',
    date: new Date().toISOString(),
  },
  {
    id: 8,
    from: 'Delhi',
    to: 'Washington',
    date: new Date().toISOString(),
  },
  {
    id: 9,
    from: 'Paris',
    to: 'New york',
    date: new Date().toISOString(),
  },
  {
    id: 10,
    from: 'Barcelona',
    to: 'Paris',
    date: new Date().toISOString(),
  },
  {
    id: 11,
    from: 'Chennai',
    to: 'Delhi',
    date: new Date().toISOString(),
  },
  {
    id: 12,
    from: 'Chennai',
    to: 'Tokyo',
    date: new Date().toISOString(),
  },
  {
    id: 13,
    from: 'New york',
    to: 'Mumbai',
    date: new Date().toISOString(),
  },
  {
    id: 14,
    from: 'Tokyo',
    to: 'Kolkata',
    date: new Date().toISOString(),
  },
  {
    id: 15,
    from: 'Shimla',
    to: 'Dhaka',
    date: new Date().toISOString(),
  },
  {
    id: 16,
    from: 'Tokyo',
    to: 'Shimla',
    date: new Date().toISOString(),
  },
  {
    id: 17,
    from: 'Dhaka',
    to: 'Ahmedabad',
    date: new Date().toISOString(),
  },
  {
    id: 18,
    from: 'Ahmedabad',
    to: 'Ibiza',
    date: new Date().toISOString(),
  },
  {
    id: 19,
    from: 'Delhi',
    to: 'Mumbai',
    date: new Date().toISOString(),
  },
  {
    id: 20,
    from: 'Singapore',
    to: 'Delhi',
    date: new Date().toISOString(),
  },
  {
    id: 21,
    from: 'Delhi',
    to: 'Singapore',
    date: new Date().toISOString(),
  },
  {
    id: 22,
    from: 'Dhaka',
    to: 'Shimla',
    date: new Date().toISOString(),
  },
];

@Injectable({
  providedIn: 'root',
})
export class FlightApiService {
  constructor() {}

  loadFlights(): Observable<Flight[]> {
    return of(FLIGHTS_DATA);
  }
}
