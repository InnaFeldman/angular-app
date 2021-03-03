import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devider',
  templateUrl: './devider.component.html',
  styleUrls: ['./devider.component.scss']
})
export class DeviderComponent implements OnInit {
  title:string = "Number divider";
  error_msg:string = "";
  inputNumber:string = "";
  constructor() { }

  ngOnInit(): void {}

  inputHandl(value:string){
    this.inputNumber = value;
    return this.inputNumber;
  }

  countDeviders(){
    if(Number(this.inputNumber)){

    }else {
      this.error_msg = 'Input must be a number!!!'
    }
  }
}

// counter(i:number){
//   return new Array(i);
// }

 //if(inputNum == inputNum - 0){
  //     $('.number').text(inputNum);
  //     for(let i = 1; i <= inputNum; i++) {
  //         if(inputNum % i == 0) {
  //             console.log(i);
  //             fact += '<li>'+ i + '</li>';
  //             // num.push(i);
  //             counter++;
  //             sum+= i;
  //         }
  //     }
  //     fact += '</ul>';
  //     $('.list').html(fact);
  //     $('.sumSpan').text(sum);
  //     $('.quanity').text(counter);

  // }else {
  //     $('.error').text('Invalid number')
  // }

  //https://lishman.io/using-ngfor-to-repeat-n-times-in-angular
