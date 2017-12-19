import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MatNativeDateModule} from '@angular/material';
import {ExampleModule} from '@angular/material-examples';

import {MaterialDocsApp} from './material-docs-app';

import {CanActivateComponentSidenav} from './pages/component-sidenav/component-sidenav-can-load-guard';
import {HttpClientModule} from '@angular/common/http';
import {PlatformPickerModule} from './shared/platform-picker/platform-picker.module';
import {MATERIAL_DOCS_ROUTES} from './routes';
import {ComponentCategoryListModule} from './pages/component-category-list/component-category-list';
import {ComponentViewerModule} from './pages/component-viewer/component-viewer';
import {GuideViewerModule} from './pages/guide-viewer';
import {NavBarModule} from './shared/navbar';
import {SvgViewerModule} from './shared/svg-viewer/svg-viewer';
import {ThemePickerModule} from './shared/theme-picker';
import {ComponentPageTitle} from './pages/page-title/page-title';
import {StyleManager} from './shared/style-manager';
import {ThemeStorage} from './shared/theme-picker/theme-storage/theme-storage';
import {GuideItems} from './shared/guide-items/guide-items';
import {DocumentationItems} from './shared/documentation-items/documentation-items';
import {StackblitzButtonModule} from './shared/stackblitz';
import {HomepageModule} from './pages/homepage';
import {GuideListModule} from './pages/guide-list';
import {FooterModule} from './shared/footer/footer';
import {ComponentHeaderModule} from './pages/component-page-header/component-page-header';
import {ComponentSidenavModule} from './pages/component-sidenav/component-sidenav';
import {DocViewerModule} from './shared/doc-viewer/doc-viewer-module';
import {ComponentListModule} from './pages/component-list';
import {PlatformPickerService} from './shared/platform-picker/platform-picker.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExampleModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule.forRoot(MATERIAL_DOCS_ROUTES),

    ComponentCategoryListModule,
    ComponentHeaderModule,
    ComponentListModule,
    ComponentSidenavModule,
    ComponentViewerModule,
    DocViewerModule,
    FooterModule,
    GuideListModule,
    GuideViewerModule,
    HomepageModule,
    NavBarModule,
    StackblitzButtonModule,
    SvgViewerModule,
    ThemePickerModule,
    PlatformPickerModule
  ],
  declarations: [MaterialDocsApp],
  providers: [
    ComponentPageTitle,
    DocumentationItems,
    GuideItems,
    StyleManager,
    ThemeStorage,
    CanActivateComponentSidenav,
    PlatformPickerService,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [MaterialDocsApp],
})
export class AppModule {
}
