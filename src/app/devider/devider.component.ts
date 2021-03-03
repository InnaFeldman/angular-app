import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devider',
  templateUrl: './devider.component.html',
  styleUrls: ['./devider.component.scss']
})
export class DeviderComponent implements OnInit {
  title:string = "Number divider";
  inputNumber:string = "";
  constructor() { }

  ngOnInit(): void {}

  inputHandl(value:string){
    this.inputNumber = value;
    return this.inputNumber;
  }

  countDeviders(){
    console.log(this.inputNumber);
  }
}
