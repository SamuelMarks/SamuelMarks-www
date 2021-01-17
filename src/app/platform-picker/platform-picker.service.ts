import {Injectable} from '@angular/core';

export type Platform = 'macOS' | 'Linux' | 'Windows';

@Injectable()
export class PlatformPickerService {
  public static platforms: Platform[] = [
    'macOS', 'Linux', 'Windows'
  ];
  private platform: string = PlatformPickerService.platforms[1];

  constructor() {
    const platForm = localStorage.getItem('platform');
    if (platForm == null)
      this.platform = PlatformPickerService.platforms[1];
  }

  // public get platform(): string {
  public getPlatform(): string {
    const platForm = localStorage.getItem('platform');
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
