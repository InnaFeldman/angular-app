import { Component } from '@angular/core';

export interface Card{
  title:string
  text:string
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

  toggleCards(){
    this.toggle = !this.toggle;
  }
}
