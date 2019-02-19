import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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
    const body = this.encodeDataToURL(estudiante);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', "3d524a53c110e4c22463b10ed32cef9d");
    const url = urljoin(this.estudianteUrl, 'registrarEstudiante');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  buscarEstudiante(numeroCuenta: string, numeroIdentificacion: string): Promise<any>{
    const url = urljoin(environment.apiUrl, 'estudiante/buscarEstudiante/'+numeroCuenta+'/'+numeroIdentificacion);
    return this.http.get(url).toPromise().then(response => response.json() as any);
  }

  encodeDataToURL = (data) => {
    return Object
      .keys(data)
      .map(value => `${value}=${encodeURIComponent(data[value])}`)
      .join('&');
 }

}