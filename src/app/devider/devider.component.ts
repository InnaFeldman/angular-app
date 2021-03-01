import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devider',
  templateUrl: './devider.component.html',
  styleUrls: ['./devider.component.scss']
})
export class DeviderComponent implements OnInit {
  title:string = "Number devider";
  inputNum:any;
  constructor() { }

  ngOnInit(): void {}

  inputHandl(event:any){
    const value = event.target.value;
    this.inputNum = value;
  }

  countDeviders(){
    this.title = 'Title is changed';
  }
}
