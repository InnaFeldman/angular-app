import { from } from "rxjs";
import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component ({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComonent  implements OnInit{
  @Input() card: any;
  @Input() index: any;

  title:string = 'My card title';
  text = 'My simple text';

  cardDate: Date = new Date();
  // number = 42;
  // array = [1, 1, 2, 3, 5, 8, 13];
  // obj = {
  //   name:'Inna',
  //   info: {
  //     age: 25,
  //     job: 'frontend'
  //   }
  // }
  disabled = false;

  textColor: any;

  ngOnInit(){}

  imgUrl = 'https://njitdev.hackerudev.com/app/uploads/group_886.png';
  // ngOnInit(){
  //   setTimeout(()=>{
  //     this.imgUrl = 'https://njitdev.hackerudev.com/app/uploads/office-supplies.svg';
  //     this.disabled = true;
  //   }, 3000)
  // }

  getInfo():string{
    return "This is my info";
  }

  changeTitle(){
    this.card.title = "Title has been changed";
  }

  inputHandler(value:any){
    // const value = event.target.value;
    this.title = value;
  }

  changeHandler(){
    console.log(this.title);
  }
}
