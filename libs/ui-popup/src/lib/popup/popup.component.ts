import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'flights-data-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() message: string | undefined;
  @Input() popUpTitle: string | undefined;
  @Input() showYesButon: boolean | undefined;
  @Input() showNoButon: boolean | undefined;
  @ViewChild('openModal') openModal: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openModal?.nativeElement.click();
  }
}
