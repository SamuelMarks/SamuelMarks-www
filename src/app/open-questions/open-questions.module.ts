import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OpenQuestionsComponent } from './open-questions.component';
import { openQuestionsRoutes } from './open-questions.routes';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(openQuestionsRoutes)
  ],
  declarations: [OpenQuestionsComponent]
})
export class OpenQuestionsModule {
}
