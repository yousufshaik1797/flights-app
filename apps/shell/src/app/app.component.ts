import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'flights-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  constructor(private _AppService: AppService) {}
  ngOnInit(): void {
    // this.GetRoles();
  }

  GetRoles() {
    this._AppService.getAllRoles().subscribe((roles) => {
      debugger;
      console.log(roles);
    });
  }
}
