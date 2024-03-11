import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taller2';
  

  multiples(numero:number): string|number{
    if(numero % 3 === 0 && numero % 5 === 0){
      return 'fizzbuzz'
    }else if (numero % 5 ===0) {
      return 'buzz'
    } else if (numero % 3 === 0 ) {
      return 'fizz'
    }else{
      return numero
    }
  }


  anagrama(cadena1:string, cadena2:string): string | boolean{
    let cadena1UpperCase = cadena1.toLowerCase().replace(/\s/g, '');
    let cadena2UpperCase = cadena2.toLowerCase().replace(/\s/g, '');
    if(cadena1UpperCase === cadena2UpperCase){
      return 'Las cadenas son exactamente iguales, no pueden ser un anagrama'
    }else{
      cadena1UpperCase = cadena1UpperCase.split("").sort().join("");
      cadena2UpperCase = cadena2UpperCase.split("").sort().join("");
      return cadena1UpperCase === cadena2UpperCase;
    }
  }

  primo(numPrimo:number):boolean{
    for (var i = 2; i < numPrimo; i++) {

     
      if (numPrimo % i === 0) {
        console.log(i + " es un multiplo de " + numPrimo);
        console.log(numPrimo + " no es un numero primo porque " + i + " es un multiplo");
        return false;
      }
  
    }
  
   

    return numPrimo !=1;
  
  }

  fibonacci(numFibo: number): number{
    if (numFibo <= 1){
      return numFibo
    }else{
      return this.fibonacci(numFibo -1 ) + this.fibonacci(numFibo-2)
    }
  }

  secuenciaFibona(num:number){
      const numeroPar = num % 2 === 0 ? 'es un numero par' :'es un numero par '
      const numeroPrimo = this.primo(num) ? 'Es un numero Primo' : 'No es un numero primo';
      const numeroFibonacci = this.fibonacci(num) ? 'es un numero fibonacci' : 'no es un numero fibonacci'
  }

 
}
