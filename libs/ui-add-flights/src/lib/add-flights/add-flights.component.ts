import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'flights-data-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.scss']
})
export class AddFlightsComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  addFlightsData!: FormGroup;
  showPopup: boolean = false;
  message: string | undefined;
  popUpTitle: string | undefined;

  ngOnInit(): void {
    this.addFlightsData = this.fb.group({
      id: new FormControl('', [Validators.required]),
      from: new FormControl(''),
      to: new FormControl(''),
      departure: new FormControl(''),
    });
  }

  Submit() {
    debugger;
    const id = this.addFlightsData.get('id')?.value;
    this.message =
      'Are you sure you want to add this flight with id' + ' ' + id;
    this.popUpTitle = 'Add Flights !';
    this.showPopup = true;
  }
}
