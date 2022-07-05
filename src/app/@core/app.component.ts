import { Component, OnInit } from '@angular/core';
import { IBoard } from '../@library/site.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Material Component App';

  public board: IBoard = {
    name: 'Test Board', columns: [
      {
        name: 'Ideas', id: '21', tasks: [
          'Some random idea',
          'This is another random idea'
        ]
      },
      {
        name: 'BrainStorm', id: '25', tasks: [
          'Magic stuffs',
          "Fairy things"
        ]
      },
      {
        name: 'Research', id: '32', tasks: [
          'Lorem ipsum',
          'foo'
        ]
      }
    ]
  };

  ngOnInit(): void {
    if (!localStorage.getItem("kanban"))
      localStorage.setItem('kanban', JSON.stringify(this.board));
  }
}
