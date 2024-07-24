import { Routes } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { MlCompilersPackageManagementComponent } from './2024-07_ml-compilers-package-management/2024-07_ml-compilers-package-management.component';

export const presentationRoutes: Routes = [
  { path: '', component: PresentationsComponent },
  { path: '2024-07_ml-compilers-package-management', component: MlCompilersPackageManagementComponent }
];
