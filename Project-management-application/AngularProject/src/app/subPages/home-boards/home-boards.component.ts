import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop'

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'home-boards',
  templateUrl: './home-boards.component.html',
  styleUrls: ['./home-boards.component.scss']
})
export class HomeBoardsComponent {
  task: string = '';
  constructor(){

  }

  board: Board = new Board('Test Board',[
    new Column('ideas',[

    ]),
    new Column('doing', [

    ]),
    new Column("todo",[


    ]),
    new Column('done',[

    ])
  ])




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTaskActivate(){
    console.log('button works')
    const off = document.getElementById("off");
    const on = document.getElementById('on');

    off!.style.display = "none";
    on!.style.display = "block";

  }

  addTask(){
    const off = document.getElementById("off");
    const on = document.getElementById('on');
    this.board.columns[0].tasks.push(this.task);

    off!.style.display = "block";
    on!.style.display = "none";
  }

}
