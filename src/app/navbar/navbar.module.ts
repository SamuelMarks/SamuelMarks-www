import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';
import { PlatformPickerModule } from '../platform-picker/platform-picker.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSelectModule,
    PlatformPickerModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
