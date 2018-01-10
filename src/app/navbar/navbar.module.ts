import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';
import { PlatformPickerModule } from '../platform-picker/platform-picker.module';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSelectModule,
    PlatformPickerModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
