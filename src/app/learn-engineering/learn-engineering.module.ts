import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LearnEngineeringComponent } from './learn-engineering.component';
import { learnEngineeringRoutes } from './learn-engineering.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(learnEngineeringRoutes)
  ],
  declarations: [LearnEngineeringComponent]
})
export class LearnEngineeringModule {
}
