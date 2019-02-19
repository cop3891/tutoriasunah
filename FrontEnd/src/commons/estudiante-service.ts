import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';
import urljoin = require('url-join');
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class EstudianteService {

  private estudianteUrl: string;

  constructor(private http: Http) {
    this.estudianteUrl = urljoin(environment.apiUrl, 'estudiante');
  }

  registrarEstudiante(estudiante: any) {
    const body = JSON.stringify(estudiante);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const url = urljoin(this.estudianteUrl, 'registrarEstudiante');

    return this.http.post(url, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  buscarEstudiante(numeroCuenta: string, numeroIdentificacion: string): Promise<any>{
    const url = urljoin(environment.apiUrl, 'estudiante/buscarEstudiante/'+numeroCuenta+'/'+numeroIdentificacion);
    return this.http.get(url).toPromise().then(response => response.json() as any);
  }

}