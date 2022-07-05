import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../shared/material.module';

import { AdvanceFormComponent } from './advance-form.component';

describe('AdvanceFormComponent', () => {
  let component: AdvanceFormComponent;
  let fixture: ComponentFixture<AdvanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvanceFormComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdvanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be invalid', async () => {
    component.formGroup.controls['Email'].setValue('');
    component.formGroup.controls['Name'].setValue('');
    component.formGroup.controls['Password'].setValue('');
    component.formGroup.controls['Description'].setValue('');
    component.formGroup.controls['Topic'].setValue('');
    component.formGroup.controls['Checkbox'].setValue(false);
  });
});
