import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: '', loadChildren: 'app/slash/slash.module#SlashModule'},
  {path: 'docs/getting-started', loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'}
];
