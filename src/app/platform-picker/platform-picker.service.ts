import { Injectable } from '@angular/core';

export type Platform = 'macOS' | 'Linux' | 'Windows';

@Injectable()
export class PlatformPickerService {
  public static platforms: Platform[] = [
    'macOS', 'Linux', 'Windows'
  ];
  private platform: Platform | undefined;

  constructor() {
    const platForm = localStorage.getItem('platform');
    if (platForm == null)
      this.platform = PlatformPickerService.platforms[1];
  }

  // public get platform(): string {
  public getPlatform(): Platform | undefined {
    const platForm = localStorage.getItem('platform') as Platform;
    return platForm == null ? this.platform : platForm;
  }

  public is(platform: Platform): boolean {
    return this.getPlatform() === platform;
  }

  // public set platform(platForm: string) {
  public setPlatform(platForm: Platform): void {
    this.platform = platForm;
    localStorage.setItem('platform', platForm);
  }
}
