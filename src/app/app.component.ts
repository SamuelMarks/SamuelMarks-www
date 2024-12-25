import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SlashModule } from './slash/slash.module';
import { PlatformPickerService } from './platform-picker/platform-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    //BrowserModule, BrowserAnimationsModule,
    RouterModule,
    //MaterialImportModule,
    NavbarModule,
    FooterModule,
    SlashModule
  ],
  providers: [PlatformPickerService],
  standalone: true
})
export class AppComponent {
  title = 'SamuelMarks-www';
}
