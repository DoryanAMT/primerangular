import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajanumeroRef: ElementRef;
  public numeros:Array<number>

  constructor(){
    this.numeros = new Array<number>();
    this.cajanumeroRef = new ElementRef(0)
    
  }
  mostrarTabla(): void{
    
  }
  
}


