import { BrowserModule } from '@angular/platform-browser';
import {ApplicationConfig, ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { MaterialImportModule } from './material-import/material-import.module';
import { PlatformPickerService } from './platform-picker/platform-picker.service';
import { SlashModule } from './slash/slash.module';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule, RouterModule.forRoot(appRoutes, {}),
    MaterialImportModule,
    NavbarModule,
    FooterModule,
    SlashModule
  ],
  providers: [PlatformPickerService]
})
export class AppModule {
  static forRoot(config: ApplicationConfig): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: config.providers,
    };
  }
}
