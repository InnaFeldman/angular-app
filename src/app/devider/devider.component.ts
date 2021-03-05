import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devider',
  templateUrl: './devider.component.html',
  styleUrls: ['./devider.component.scss']
})
export class DeviderComponent implements OnInit {
  title:string = "Number divider";
  error_msg:string = "";
  inputNumber: number = 0;
  dividers: number[] = [];
  devidersSum:number = 0;
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {}

  countDeviders(){
    if(Number(this.inputNumber)){
      this.error_msg = '';
      for(let i = 1; i <= this.inputNumber; i++) {
        if(this.inputNumber % i == 0) {
          this.dividers.push(i);
          this.devidersSum+=i;
          this.counter++;
        }
      }
    }else {
      this.error_msg = 'Input must be a number above 0!!!'
    }
  }
}
