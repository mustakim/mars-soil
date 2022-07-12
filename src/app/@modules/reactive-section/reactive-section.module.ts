import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { AdvanceFormComponent } from './components/advance-form/advance-form.component';
import { ReactiveSectionRoutingModule } from './reactive-section-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ReactiveSectionComponent } from './reactive-section.component';
import { PipeModule } from '../shared/pipe/pipe.module';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { SharedModule } from '../shared/components/shared.module';
import { KanbanDialogComponent } from './components/kanban-dialog/kanban-dialog.component';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { AwesomeChartComponent } from './components/awesome-chart/awesome-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    BasicFormComponent,
    AdvanceFormComponent,
    ReactiveSectionComponent,
    KanbanBoardComponent,
    KanbanDialogComponent,
    SocialAuthComponent,
    AwesomeChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveSectionRoutingModule,
    MaterialModule,
    PipeModule,
    SharedModule,
    NgApexchartsModule,
    LottieModule.forRoot({ player: playerFactory }),
    provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
  exports: [
    PipeModule,
    SharedModule
  ]
})
export class ReactiveSectionModule { }
