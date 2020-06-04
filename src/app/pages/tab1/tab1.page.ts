import { Component } from '@angular/core';
import { DeseoService } from 'src/app/services/deseo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseoservice:DeseoService,
              private router:Router,
              private alert:AlertController) {}

  async agregarLista(){
  const alert = await this.alert.create({
  header: 'Nueva lista',
  inputs:[
    {
        name:'titulo',
        type:'text',
        placeholder:'Nombre de la lista'
    }
  ],
  buttons: [{
      text:"Cancelar",
      role:'cancel',
      handler:()=>{
        console.log("Cancelar");
      }
  },
  {
    text:'crear',
    handler:(data)=>{
      if (data.titulo.length ===0){
        return;
      }
      const listaId =this.deseoservice.crearLista(data.titulo);
      this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
    }
  }
]
});

 alert.present();
  }


}
