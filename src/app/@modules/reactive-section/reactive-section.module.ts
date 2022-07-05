import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { AdvanceFormComponent } from './components/advance-form/advance-form.component';
import { ReactiveSectionRoutingModule } from './reactive-section-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ReactiveSectionComponent } from './reactive-section.component';
import { PipeModule } from '../shared/pipe/pipe.module';



@NgModule({
  declarations: [
    BasicFormComponent,
    AdvanceFormComponent,
    ReactiveSectionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveSectionRoutingModule,
    MaterialModule,
    PipeModule
  ],
  exports: [
    PipeModule
  ],
})
export class ReactiveSectionModule { }
