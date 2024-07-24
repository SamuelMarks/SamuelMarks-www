import { AfterContentInit, Component } from '@angular/core';
import { SlidesComponent } from '../../slides/slides.component';

class Range implements Iterable<number> {
  constructor(
    public readonly low: number,
    public readonly high: number,
    public readonly step: number = 1
  ) {
  }

  *[Symbol.iterator]() {
    for (let x = this.low; x <= this.high; x += this.step) {
      yield x;
    }
  }
}

const range = (low: number, high: number): Range => new Range(low, high);

@Component({
  selector: 'app-2024-07_ml-compilers-package-management',
  templateUrl: './2024-07_ml-compilers-package-management.component.html',
  styleUrls: ['./2024-07_ml-compilers-package-management.component.scss']
})
export class MlCompilersPackageManagementComponent extends SlidesComponent implements AfterContentInit {
  degrees: readonly string[][] = Object.freeze([
    ["Linux",        "macOS",  "Windows",  "SunOS",          "*BSD",        "iOS", "Android"],
    ["Python",      "Kotlin",    "Swift",   "Rust",          "Java", "TypeScript",       "C"],
    ["TensorFlow", "PyTorch",      "JAX",   "Flax",  "scikit-learn",    "XGBoost",   "Keras"]
  ]);
  ngAfterContentInit() {
    this.totalSlides = 30;
  }
  range: typeof range = range;
}
