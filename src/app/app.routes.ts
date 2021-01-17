import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '',
    loadChildren: () => import('src/app/slash/slash.module').then(m => m.SlashModule)},
  {path: 'docs/getting-started',
    loadChildren: () => import('src/app/getting-started/getting-started.module').then(m => m.GettingStartedModule)},
  {path: 'docs/learn-engineering',
    loadChildren: () => import('src/app/learn-engineering/learn-engineering.module').then(m => m.LearnEngineeringModule)},
  {path: 'research/open-questions',
    loadChildren: () => import('src/app/open-questions/open-questions.module').then(m => m.OpenQuestionsModule)}
];
