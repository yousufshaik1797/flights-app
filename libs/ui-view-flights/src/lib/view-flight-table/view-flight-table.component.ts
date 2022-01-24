import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '@flights-data/feature-flight-logic';
@Component({
  selector: 'flights-data-view-flight-table',
  templateUrl: './view-flight-table.component.html',
  styleUrls: ['./view-flight-table.component.scss'],
})
export class ViewFlightTableComponent implements OnInit {
  @Input() tableHeader: string[] = [];
  @Input() tableData: Flight[] = [];

  constructor() {}

  ngOnInit(): void {}
}
