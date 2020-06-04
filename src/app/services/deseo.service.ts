import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseoService {
  listas: Lista[]=[];


  constructor() {
    this.cargarStorage();

    // const lista1 = new Lista("recolectar piedras");
    // const lista2 = new Lista("Heroes a desaparecer");

    // this.listas.push(lista1,lista2);
  }

  crearLista(titulo:string){
      const NuevaLista = new Lista(titulo);
      this.listas.push(NuevaLista);
      this.guardarStorage();
      return NuevaLista.id;
  }
  obtenerLista(id:string | number){
    id=Number(id);
    return this.listas.find(listaData=>{
      return listaData.id === id;
    })
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage(){
    if (localStorage.getItem('data')){
      this.listas=JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas=[];
    }

  }

  borrarLista(nombre:Lista){
  this.listas=this.listas.filter(listaData =>{
      return listaData.id !== nombre.id;
    })
    this.guardarStorage();
  }

  editarLista(lista:Lista){

  }
}
