import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormElements } from '../../../../@library/site.interfaces';
import { checkPassword } from '../../../../@helpers/form.helper';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnDestroy {

  //#region properties
  formGroup: FormGroup = {} as FormGroup;
  dataSource: IFormElements[] = [];
  titleError: string = '';
  displayedColumns: string[] = ['Name', 'Email', 'Password', 'Description', 'Checkbox'];

  get name() {
    return this.formGroup.get('Name') as FormControl
  }
  //#endregion

  constructor(private formBuilder: FormBuilder) { }

  //#region life cycle hooks
  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
  }
  //#endregion

  //#region component methods
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'Email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'Name': ['Mr', Validators.required],
      'Password': [null, [Validators.required, checkPassword]],
      'Description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      'Checkbox': false
    });
  }


  onSubmit(data: IFormElements) {
    this.dataSource.push(data);
  }

  //#endregion

}
