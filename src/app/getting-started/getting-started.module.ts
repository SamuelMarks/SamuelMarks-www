import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GettingStartedComponent } from './getting-started.component';
import { gettingStartedRoutes } from './getting-started.routes';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(gettingStartedRoutes)
  ],
  // providers: [PlatformPickerService],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule {
}
