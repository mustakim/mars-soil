import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePerserPipe } from './name-perser-pipe/name-perser.pipe';

@NgModule({
  declarations: [NamePerserPipe],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
