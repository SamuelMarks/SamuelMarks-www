import { Routes } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { PreAlphaComponent } from './pre-alpha/pre-alpha.component';

export const presentationRoutes: Routes = [
  {path: '', component: PresentationsComponent},
  {path: 'pre-alpha', component: PreAlphaComponent}
];
