
import { Component, OnInit } from '@angular/core';
import { FlightApiService } from '@flights-data/data-flight';
import { Subscription } from 'rxjs';
@Component({
  selector: 'flights-data-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
})
export class FlightTableComponent implements OnInit {
  constructor(private _flightApiService: FlightApiService) {}
  flightData$!: Subscription;
  flightList: any;
  destination: string = '';

  dropdown = [
    { value: 'from', descrption: 'Origin' },
    { value: 'to', descrption: 'Destination' },
  ];
  selectedItem: string = "Origin";
  today: Date = new Date();

  ngOnInit(): void {
    this.flightData$ = this._flightApiService.loadFlights().subscribe((data) => {
      this.flightList = data;
      console.log(data);
    });
  }


  ngOnDestroy() {
    this.flightData$.unsubscribe();
  }
}
