import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightTableComponent } from './view-flight-table.component';

describe('ViewFlightTableComponent', () => {
  let component: ViewFlightTableComponent;
  let fixture: ComponentFixture<ViewFlightTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlightTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlightTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
