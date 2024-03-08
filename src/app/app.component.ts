import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taller2';
  multiples(numero:number): string|number{
    if(numero % 3 ===0){
      return 'fizz'
    }else if (numero % 5 ===0) {
      return 'buzz'
    } else if (numero % 3 === 0 && numero % 5 === 0) {
      return 'fizzbuzz'
    }else{
      return numero
    }
  }


 
}
