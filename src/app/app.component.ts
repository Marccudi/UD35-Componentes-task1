import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';
  nombre="a";
  cif="a";
  direccion="a";
  grupo=1;

  clientes = [
    {nombre:"Marc", cif:"46779864A", direccion:"C/20 Nº94 bajos", grupo:1},
    {nombre:"Manolo", cif:"46779257A", direccion:"C/21 Nº94 bajos", grupo:2}
  ]
  constructor(){
  }
  anadir(nombres:string,cif:string, direccion:string, grupo:string){
    this.nombre=this.nombre
    this.clientes[this.clientes.length]={nombre:nombres, cif:cif, direccion:direccion, grupo:parseInt(grupo)};
  }
}
