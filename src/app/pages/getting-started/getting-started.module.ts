import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GettingStartedComponent} from './getting-started.component';
import {FooterModule} from '../../shared/footer/footer';

@NgModule({
  imports: [
    CommonModule, FooterModule
  ],
  // providers: [PlatformPickerService],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule {
}
