import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PopupComponent
  ],
  exports : [PopupComponent ]
})
export class UiPopupModule {}
