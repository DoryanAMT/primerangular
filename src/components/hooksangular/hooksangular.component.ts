import { Component, OnInit, DoCheck } from '@angular/core'

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"

})

export class HooksAngular implements OnInit{
    public mensaje: string;

    constructor(){
        console.log("Soy el constructor de Hooks Angular")
        this.mensaje = "Sou hooks en angular";
    }

    cambiarMensaje():void{
        this.mensaje = "Cambiado en un click";
    }

    ngOnInit(): void {
        console.log("Soy el método ngOnInit")
    }

    ngDoCheck(): void {
        console.log("Ejecutado método ngDoCheck")
    }
}