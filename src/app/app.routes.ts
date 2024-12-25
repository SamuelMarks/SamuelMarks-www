import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slash/slash.module').then(m => m.SlashModule)
  },
  {
    path: 'docs/getting-started',
    loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'docs/learn-engineering',
    loadChildren: () => import('./learn-engineering/learn-engineering.module').then(m => m.LearnEngineeringModule)
  },
  {
    path: 'research/open-questions',
    loadChildren: () => import('./open-questions/open-questions.module').then(m => m.OpenQuestionsModule)
  },
  {
    path: 'presentations',
    loadChildren: () => import('./presentations/presentations.module').then(m => m.PresentationsModule)
  }
];
