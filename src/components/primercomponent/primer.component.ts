import { Component } from '@angular/core'

//  UN COMPONENT TENDRA UNA DECLARACION DE SU CONTENIDO
@Component ({
    //  DEBEMOS DE DECLARA EL NOMBRE DEL COMPONENT
    //  EN ANGULAR, SE SUELE LLAMAR MEDIANTE GUION
    selector: "primer-component",
    //  COMO NO VAMOS A TENER HTML (VISTA) COMO TEMPLATE
    //  VAMOS A ESCRIBIR DIRECTAMENTE EL CODIGO HTML AQUI
    templateUrl: "./primer.component.html",
    styleUrl:"./primer.component.css"
})

//  TODO COMPONENT DE SER DECLARADO COMO UNA CLASE
//  DICHO NOMBRE DE CLASE SE UTILIZA DENTRO DE app.module.ts
export class PrimerComponent {
    //  AQUI DECLARAREMOS LAS VARIABLES QUE DESEEMOS
    //  DICHAS VARIABLES SON CON TIPADOS
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    //  EN AGULAR TENEMOS UN CONSTRUCTOR PARA INICIAR LAS VARIABLES
    //  O RECUPERARLAS EN ALGUN SITIO
    constructor(){
        //  PARA ACCEDER A LAS PROPIEDADES DE UNA CLASE
        //  SE UTILIZA LA PALABRA this
        this.titulo = "Hoy es miercoles";
        this.descripcion = "Hoy no llueve";
        this.anyo = 2024;
    }
}

