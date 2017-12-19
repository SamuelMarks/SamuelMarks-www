import {Component, NgModule} from '@angular/core';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SECTIONS} from '../documentation-items/documentation-items';
import {PlatformPickerModule} from '../platform-picker/platform-picker.module';
import {ThemePickerModule} from '../theme-picker';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {
  w: Window = window;

  constructor() {
  }

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}

@NgModule({
  imports: [
    MatButtonModule, MatMenuModule, RouterModule, ThemePickerModule, CommonModule,
    PlatformPickerModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {
}
