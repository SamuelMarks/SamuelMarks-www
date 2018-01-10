import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { MaterialImportModule } from './material-import/material-import.module';
import { PlatformPickerService } from './platform-picker/platform-picker.service';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule, RouterModule.forRoot(appRoutes),
    MaterialImportModule,
    NavbarModule,
    FooterModule
  ],
  providers: [PlatformPickerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
