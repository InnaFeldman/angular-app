import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from '../app.component'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
 @Output() onAdd: EventEmitter<Item> = new EventEmitter<Item>();

 todoTitle:string = '';
 inputNumber:string=''

  constructor() { }

  ngOnInit(): void {
  }


  addTodoItem(){
    if(this.todoTitle.trim()){
      const item:Item = {
        todoTitle: this.todoTitle,
      }

      this.onAdd.emit(item);
      console.log(item);
    }
    //console.log(this.todoTitle)
  }

}
