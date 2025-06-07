import { Component, Inject, DOCUMENT } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {
  w: Window | null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.w = this.document.defaultView;
  }
}
