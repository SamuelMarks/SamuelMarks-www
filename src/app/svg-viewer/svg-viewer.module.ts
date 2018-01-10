import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SvgViewerComponent } from './svg-viewer.component';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [SvgViewerComponent],
  exports: [SvgViewerComponent]
})
export class SvgViewerModule {
}
