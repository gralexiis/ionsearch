import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( usuarios: Usuario[], texto: string ): Usuario[] {

    if ( texto.length === 0 ) { return usuarios; }

    texto = texto.toLocaleLowerCase();

    return usuarios.filter( usuario => {
      return usuario.title.toLocaleLowerCase().includes(texto)
            
    });

  }

}
