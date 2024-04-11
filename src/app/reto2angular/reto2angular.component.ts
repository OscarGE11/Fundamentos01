import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2angular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2angular.component.html',
  styleUrl: './reto2angular.component.css'
})
export class Reto2angularComponent {
  stock:number=0;
  precioCosto:number=0;
  precioVenta:number=0;

  comprobarStockYPrecios(): void {
    
    const errorExistente = document.getElementById("error");
    if (errorExistente) {
        errorExistente.remove();
    }

    if (this.precioCosto > 0 && this.precioVenta > 0 && this.stock > 0) {
      
        

        alert("Producto añadido correctamente");
        
    } else {

      const error = document.createElement("h1");
        error.id = "error"; 
        error.innerText = "No correcto";
        error.style.color = "red";
        document.body.appendChild(error);

    }
}


}
