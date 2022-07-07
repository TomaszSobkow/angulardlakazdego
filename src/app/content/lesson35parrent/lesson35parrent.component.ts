import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson35parrent',
  templateUrl: './lesson35parrent.component.html',
  styleUrls: ['./lesson35parrent.component.css']
})
export class Lesson35parrentComponent implements OnInit {

  title = ' Lesson #35 Component integration ';

 
 parentTasksArray = ['swimming', 'work', 'slip', 'shopings', 'playing'];

  @Output()
  emitTasks = new EventEmitter<string[]>();

  emitedTaks(tasks: string[]): void {
    this.emitTasks.emit(tasks);
  }

  receviedTasksArray: string[] = [];

  receivedTask(task : string): void{
    this.receviedTasksArray.push(task);
  }

  constructor() { }

  ngOnInit(): void {

    this.emitedTaks(this.parentTasksArray);
    
  }

}
