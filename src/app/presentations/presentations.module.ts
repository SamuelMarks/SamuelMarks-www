import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';

import { NavbarModule } from '../navbar/navbar.module';
import { MlCompilersPackageManagementComponent } from './2024-07_ml-compilers-package-management/2024-07_ml-compilers-package-management.component';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { PresentationsComponent } from './presentations.component';
import { presentationRoutes } from './presentations.routes';
import { TerminalBlockComponent } from "../terminal-block/terminal-block.component";


@NgModule({
  declarations: [PresentationsComponent, MlCompilersPackageManagementComponent],
  imports: [
    CommonModule, RouterModule.forChild(presentationRoutes),
    FlexLayoutModule,
    NavbarModule, SvgViewerModule, TerminalBlockComponent
  ]
})
export class PresentationsModule {
}
