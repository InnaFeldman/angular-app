import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  title:string = "Number divider";
  error_msg:string = "";
  inputNumber: number = 0;
  dividers: number[] = [];
  dividersSum:number = 0;
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {}

  countDeviders(){
    if(Number(this.inputNumber)){
      this.error_msg = '';
      for(let i = 1; i <= this.inputNumber; i++) {
        if(this.inputNumber % i == 0) {
          this.dividers.push(i);
          this.dividersSum+=i;
          this.counter++;
        }
      }
    }else {
      this.error_msg = 'Input must be a number above 0!!!'
    }
  }
}
