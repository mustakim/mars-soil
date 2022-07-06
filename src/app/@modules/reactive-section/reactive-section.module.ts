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
import { FirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    BasicFormComponent,
    AdvanceFormComponent,
    ReactiveSectionComponent,
    KanbanBoardComponent,
    KanbanDialogComponent,
    SocialAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveSectionRoutingModule,
    MaterialModule,
    PipeModule,
    SharedModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
  exports: [
    PipeModule,
    SharedModule
  ],
})
export class ReactiveSectionModule { }
