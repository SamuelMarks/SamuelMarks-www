import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
