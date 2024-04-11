import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1angular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto1angular.component.html',
  styleUrl: './reto1angular.component.css'
})
export class Reto1angularComponent {
  email:string="";
   password:string="";
   confirmPassword:string="";

   comprobarPass():void{
    if(this.password===this.confirmPassword){
      alert(`Bienvenido ${this.email}`)
    } else {
      alert("Usuario o contraseña inválidos")
    }
   }
}
