import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallest-number',
  templateUrl: './smallest-number.component.html',
  styleUrls: ['./smallest-number.component.scss']
})
export class SmallestNumberComponent implements OnInit {
  inputValue: number = 0;
  newArray:number[] = [];
  error_msg:string = "";
  minNumber:number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }

  addInputValue(){
    if(Number(this.inputValue)){
      this.error_msg = '';
      this.newArray.push(this.inputValue);
      console.log(this.newArray);
    }else {
      this.error_msg = 'Input must be a number';
    }
  }

  getResult(){
    this.minNumber = this.newArray[0];
    for(let i = 0; i < this.newArray.length; i++){
      if(this.newArray[i] < this.minNumber){
        this.minNumber = this.newArray[i];
      }
    }
  }

}
