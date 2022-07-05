import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        FormsModule,
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

  // testing number of elements in forms
  it('Testing a form group element count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#advanceForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(7)
  })
});
