import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../shared/material.module';

import { BasicFormComponent } from './basic-form.component';

describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicFormComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance; // Basic component test instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // checking if its created
  });

  it('should have Mr in Name', () => {
    expect(component.formGroup.controls['Name'].getRawValue()).toContain('Mr');
  });

  it('Form should be invalid', async () => {
    component.formGroup.controls['Email'].setValue('');
    component.formGroup.controls['Name'].setValue('');
    component.formGroup.controls['Password'].setValue('');
    component.formGroup.controls['Description'].setValue('');
    component.formGroup.controls['Checkbox'].setValue(false);
  });
});
