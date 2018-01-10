import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialImportModule } from '../material-import/material-import.module';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';

import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    MaterialImportModule, SvgViewerModule
  ],
  declarations: [SlashComponent]
})
export class SlashModule {
}
