import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajanumeroRef!: ElementRef;
  public numeros:Array<number>
  public numero: number

  constructor(){
    this.numeros = new Array<number>();
    this.numero = 0;
    
  }
  mostrarTabla(): void{
    this.numero = this.cajanumeroRef.nativeElement.value
    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      var resultado = this.numero * i
      aux.push(resultado);
    }
    this.numeros = aux
  }
  
}


