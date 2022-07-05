import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('../@modules/reactive-section/reactive-section.module').then(m => m.ReactiveSectionModule)
  },
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
