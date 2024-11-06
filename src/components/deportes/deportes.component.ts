import { Component } from '@angular/core'

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
    public numeros: Array<number>;
    public sports: Array<string>;
    constructor(){
        this.numeros = [1,2,3,4,5,12,3,1,2,41]
        this.sports = ["Canicas","Padel","Petanca","Curling","Dardos","Fútbol","Baseball"]
    }
}