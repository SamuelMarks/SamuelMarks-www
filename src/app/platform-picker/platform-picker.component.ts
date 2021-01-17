import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Platform, PlatformPickerService} from './platform-picker.service';

@Component({
  selector: 'app-platform-picker',
  templateUrl: './platform-picker.component.html',
  styleUrls: ['./platform-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlatformPickerComponent implements OnInit {
  platformSelectd!: string;
  platforms: Platform[];

  constructor(public platformPickerService: PlatformPickerService) {
    this.platforms = PlatformPickerService.platforms;
  }

  ngOnInit(): void {
    this.platformSelectd = this.platformPickerService.getPlatform();
  }

  updateService(event: { value?: Platform }): void {
    if (event.value != null) this.platformPickerService.setPlatform(event.value);
  }
}
