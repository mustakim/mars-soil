import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormElements, ITopic } from '../../../../@library/site.interfaces';
import { checkPassword } from '../../../../@helpers/form.helper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-advance-form',
  templateUrl: './advance-form.component.html',
  styleUrls: ['./advance-form.component.scss']
})
export class AdvanceFormComponent implements OnInit {

  //#region properties
  formGroup: FormGroup = {} as FormGroup;
  dataSource: IFormElements[] = [];
  titleError: string = '';
  displayedColumns: string[] = ['Name', 'Email', 'Password', 'Description', 'Topic', 'Checkbox'];
  options: ITopic[] = [{ name: 'Business Analyze' }, { name: 'Development' }, { name: 'Testing' }];
  topicOptions: Observable<ITopic[]> = new Observable<ITopic[]>();

  get name() {
    return this.formGroup.get('Name') as FormControl
  }
  //#endregion

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

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
      'Name': [null, Validators.required],
      'Password': [null, [Validators.required, checkPassword]],
      'Description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      'Topic': ['', []],
      'Checkbox': ''
    });

    this.topicOptions = this.formGroup.controls["Topic"].valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  private _filter(name: string): ITopic[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSubmit(data: IFormElements) {
    this.dataSource.push(data);
    this.snackBar.open(`Added data for ${data.Name}`, 'Okay', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  onDisplay(topic: ITopic): string {
    return topic?.name ? topic.name : '';
  }

  onClearData() {
    this.dataSource = [];
  }
  //#endregion

}
