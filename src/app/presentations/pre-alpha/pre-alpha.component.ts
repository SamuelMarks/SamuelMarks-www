import { AfterContentInit, Component } from '@angular/core';
import { SlidesComponent } from '../../slides/slides.component';

@Component({
  selector: 'app-pre-alpha',
  templateUrl: './pre-alpha.component.html',
  styleUrls: ['./pre-alpha.component.scss']
})
export class PreAlphaComponent extends SlidesComponent implements AfterContentInit {
  ngAfterContentInit() {
    this.totalSlides = 30;
  }
}
