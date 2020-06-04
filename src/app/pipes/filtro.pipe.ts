import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas:Lista[],completado:boolean = true): Lista[] {
    return listas.filter(lista =>{
      return lista.terminada===completado;
    })

  }

}
