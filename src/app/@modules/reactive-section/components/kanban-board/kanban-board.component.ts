import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IBoard, IColumn, IDialogData } from 'src/app/@library/site.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { KanbanDialogComponent } from '../kanban-dialog/kanban-dialog.component';
import { EnumDialogType } from 'src/app/@library/site.enum';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  public board: IBoard = {} as IBoard;
  boardColumnIndex: string[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const kanbanBoardData = localStorage.getItem('kanban');
    if (kanbanBoardData?.trim()) {
      this.board = JSON.parse(kanbanBoardData);
      this.boardColumnIndex = this.board.columns.map(boardColumn => boardColumn.id)
    }
  }

  dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  drop(event: any): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    localStorage.setItem('kanban', JSON.stringify(this.board));
  }

  addItemInBoard(column: IColumn) {
    const dialogRef = this.dialog.open(KanbanDialogComponent, {
      width: '20rem',
      data: { type: EnumDialogType.Item },
    });

    dialogRef.afterClosed().subscribe((data: IDialogData) => {
      this.board.columns.forEach((columnInfo, index) => {
        if (columnInfo === column) {
          columnInfo?.tasks.push(data.task);
          this.board.columns[index] = columnInfo;
        }
      });

      localStorage.setItem('kanban', JSON.stringify(this.board));
    });
  }

  addColumnInBoard() {
    const dialogRef = this.dialog.open(KanbanDialogComponent, {
      width: '20rem',
      data: { type: EnumDialogType.Column },
    });

    dialogRef.afterClosed().subscribe((data: IDialogData) => {
      const column: IColumn = {
        name: data.name, id: data.id, tasks: []
      }
      this.board.columns.push(column);
      localStorage.setItem('kanban', JSON.stringify(this.board));
    });
  }
}
