import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnumDialogType } from 'src/app/@library/site.enum';
import { IDialogData } from 'src/app/@library/site.interfaces';

@Component({
  selector: 'app-kanban-dialog',
  templateUrl: './kanban-dialog.component.html',
  styleUrls: ['./kanban-dialog.component.scss']
})
export class KanbanDialogComponent implements OnInit {

  get EnumDialogType() {
    return EnumDialogType;
  }

  constructor(
    public dialogRef: MatDialogRef<KanbanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit(): void { }
}
