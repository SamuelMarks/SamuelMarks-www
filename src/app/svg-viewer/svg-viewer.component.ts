import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-viewer',
  template: '<div class="docs-svg-viewer" aria-hidden="true"></div>',
})
export class SvgViewerComponent implements OnInit {
  @Input() src!: string;
  @Input() scaleToContainer!: boolean;

  constructor(private elementRef: ElementRef, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template: string): void {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = path.slice(path.indexOf('assets/') - 1);
    this.http.get(svgAbsPath, { responseType: 'text' }).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse);
    });
  }
}
