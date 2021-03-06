import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  getUsuarios() {

    return this.http.get<Usuario[]>( 'assets/photos.json' )
              .pipe(
                delay( 2500 )
              );

  }

}
