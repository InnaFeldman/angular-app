import { Component, OnInit,Input,OnDestroy, Output, EventEmitter } from '@angular/core';
import {Item} from '../app.component'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() item!: Item;
  @Output() onRemove = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(){
    this.onRemove.emit(this.item.id);
  }

  ngOnDestroy(){}

}
