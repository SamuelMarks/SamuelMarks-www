import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { PlatformPickerComponent } from './platform-picker.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatMenuModule
  ],
  declarations: [PlatformPickerComponent],
  exports: [PlatformPickerComponent]
})
export class PlatformPickerModule {
}
