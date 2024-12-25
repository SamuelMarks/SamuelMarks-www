import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.component.html',
    styleUrls: ['./slides.component.scss'],
    standalone: true
})
export class SlidesComponent implements OnInit {
  currentSlide: number = 1;
  noKeyBindSlides?: number[];

  // tslint:disable-next-line:variable-name
  _totalSlides: number = 23;

  get totalSlides(): number {
    return this._totalSlides;
  }

  set totalSlides(totalSlides: number) {
    this._totalSlides = totalSlides - 1;
  }

  getIncrementSlideNumber(): number {
    this._totalSlides += 1;
    return this._totalSlides;
  }

  isFullScreen(): boolean {
    return !document.fullscreenElement;
  }

  toggleFullScreen() {
    this.isFullScreen() ?
      document.documentElement.requestFullscreen() :
      // tslint:disable-next-line:no-unused-expression
      document.exitFullscreen != null &&
      document.exitFullscreen().catch(console.error);
  }

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment?: string | null) =>
      this.currentSlide = fragment == null ? 0 : parseInt(fragment, 10)
    );
  }

  navigate() {
    const tree = this.router.parseUrl(this.router.url);
    tree.fragment = this.currentSlide.toString();
    this.router.navigateByUrl(tree).catch(console.error);
  }

  prev() {
    if (this.currentSlide < 1) return;
    this.currentSlide--;
    this.navigate();
  }

  next() {
    if (this.totalSlides === this.currentSlide) return;
    this.currentSlide++;
    this.navigate();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.noKeyBindSlides != null && this.noKeyBindSlides.indexOf(this.currentSlide) > -1)
      return;
    switch (event.key) {
      case 'Down':
      case 'ArrowDown':
      case 'Right':
      case 'ArrowRight':
        return this.next();
      case 'Up':
      case 'ArrowUp':
      case 'Left':
      case 'ArrowLeft':
        return this.prev();
      case 'f':
        return this.toggleFullScreen();
    }
  }
}
