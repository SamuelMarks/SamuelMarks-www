import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Platform = 'macOS' | 'Linux' | 'Windows';

@Injectable()
export class PlatformPickerService {
  public static platforms: Platform[] = [
    'macOS', 'Linux', 'Windows'
  ];
  private platform: Platform | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const platForm = localStorage.getItem('platform');
      if (platForm == null)
        this.platform = PlatformPickerService.platforms[1];
    }
  }

  // public get platform(): string {
  public getPlatform(): Platform | undefined {
    if (isPlatformBrowser(this.platformId)) {
      const platForm = localStorage.getItem('platform') as Platform;
      return platForm == null ? this.platform : platForm;
    } else {
      return undefined;
    }
  }

  public is(platform: Platform): boolean {
    return this.getPlatform() === platform;
  }

  // public set platform(platForm: string) {
  public setPlatform(platForm: Platform): void {
    this.platform = platForm;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('platform', platForm);
    }
  }
}
