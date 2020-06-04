import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseoService } from 'src/app/services/deseo.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) lista:IonList;
  @Input() terminada=true;

  constructor(public deseoservice:DeseoService,
              private router:Router,
              private alert:AlertController) {
  }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){

    if (this.terminada === true){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    }


  }

  borrarLista(nombre:Lista){
    this.deseoservice.borrarLista(nombre);
  }

  async editarLista(lista:Lista){

    const alert = await this.alert.create({
    header: 'Editar Nombre de lista',
    inputs:[
      {
          name:'titulo',
          type:'text',
          value:lista.titulo,
          placeholder:'Nombre de la lista'
      }
    ],
    buttons: [{
        text:"Cancelar",
        role:'cancel',
        handler:()=>{
          console.log("Cancelar");
          this.lista.closeSlidingItems();
        }
    },
    {
      text:'Actualizar',
      handler:(data)=>{
        if (data.titulo.length ===0){
          return;
        }
        lista.titulo=data.titulo;
        this.deseoservice.guardarStorage();
        this.lista.closeSlidingItems();
      }
    }
  ]
  });

   alert.present();


  }

}
