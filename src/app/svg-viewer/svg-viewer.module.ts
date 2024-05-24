import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SvgViewerComponent } from './svg-viewer.component';


@NgModule({ exports: [SvgViewerComponent],
    declarations: [SvgViewerComponent], imports: [], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SvgViewerModule {}
