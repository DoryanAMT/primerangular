import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
    templateUrl: "./sumanumeros.component.html"
})

export class SumarNumerosComponent {
    //  DECLARAMOS VARIABLES PARA HAER REFERENCIA A LAS CAJAS
    //  <input/> MEDIANTE SU ID DE ANGULAR
    @ViewChild("cajanumero1") cajanumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajanumero2Ref!: ElementRef;
    public suma!: number;
    //  EN ANGULAR TODAS LAS PROPIEDADES DEBEN SER INSTANCIADAS/INICIADAS
    //  LOS OBJETOS DE REFERENCIA DEBEMOS UTILIZAR UNA SINTAXIS
    //  MEDIANTE SU CONSTRUCTOR (new) E INDICAR EL VALOR POR DEFECTO QUE
    //  DESEAMOS QUE TENGAN LAS CAJAS
    constructor(){
        // this.suma = 0;
        // this.cajanumero1Ref = new ElementRef(0);
        // this.cajanumero2Ref = new ElementRef(0);
    }

    sumaNumeros(): void{
        let num1 = this.cajanumero1Ref.nativeElement.value;
        let num2 = this.cajanumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2)

    }

}