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



@NgModule({
  declarations: [
    BasicFormComponent,
    AdvanceFormComponent,
    ReactiveSectionComponent,
    KanbanBoardComponent,
    KanbanDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveSectionRoutingModule,
    MaterialModule,
    PipeModule,
    SharedModule
  ],
  exports: [
    PipeModule,
    SharedModule
  ],
})
export class ReactiveSectionModule { }
