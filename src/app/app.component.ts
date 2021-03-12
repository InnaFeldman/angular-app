import { Component } from '@angular/core';

export interface Card{
  title:string
  text:string
}

export interface Item {
  todoTitle:string,
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  toggle = true;

  cards: Card[] = [
    {title: 'Card 1', text:'This is card number 1'},
    {title: 'This is Card 2', text:'This is card number 2'},
    {title: 'Last Card 3', text:'This is card number 3'}
  ]

  items:Item [] = [
    {todoTitle: 'My first assignment', id:1},
    {todoTitle: 'My fsecond assignment', id:2}
  ]

  toggleCards(){
    this.toggle = !this.toggle;
  }

  addNewItem(item:Item){
    this.items.unshift(item);
    //console.log(item);
  }

  removeItem(id:number){
    console.log("Itrm id", id);
    this.items = this.items.filter(i => i.id !== id);
  }
}
