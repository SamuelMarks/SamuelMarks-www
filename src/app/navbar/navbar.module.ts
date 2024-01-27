import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

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
