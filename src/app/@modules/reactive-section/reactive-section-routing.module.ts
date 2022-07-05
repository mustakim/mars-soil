import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveSectionComponent } from './reactive-section.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveSectionRoutingModule { }
