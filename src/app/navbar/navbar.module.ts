import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
