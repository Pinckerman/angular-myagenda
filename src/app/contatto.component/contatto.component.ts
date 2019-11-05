import { Component } from '@angular/core'; 
import { Contatto } from './contatto.model'

@Component ({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Federico', 'Sannicolò', 'f.san@gmail.com', '3491234567', 5);

  setTextColor() {

    return this.contatto.isPreferito() ? "red" : "black";
  }
}