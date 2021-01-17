import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

alerta = 'alert-danger';
propiedad = {
  danger: false
};

cargando = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.cargando = true;
    setTimeout( () => this.cargando = false, 3000);
  }

}
