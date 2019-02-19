import { Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';
import { HttpHeaders,  HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import urljoin = require('url-join');
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

	private usuario: any = {
		codigoUsuario: 8,
		//codigoUsuario: 6,
		nombre: 'Brayan Josue Medina Melendez',
		cuenta: '20141002050',
		numeroEmpleado: '201821058',//Atributo para docentes
		carrera: 'Ingenieria en sistemas',
		codigoCarrera: 1,
		codigoPeriodo: 1,
		campusUniversitario: 'Ciudad Universitaria',
		anio: 2018,
		periodo: 1,
		nombrePeriodo: "I Periodo 2018",
		indiceGlobal: 90,
		indicePeriodo: 90,
		avanceAcademico: 75,
		tipoUsuario: 'estudiante',//valores soportados: 'docente', 'administrador',
		token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXBvVXN1YXJpbyI6ImVzdHVkaWFudGUiLCJudW1lcm9DdWVudGEiOiIyMDE0MTAwIiwiQ29udHJhc2VuaWEiOiIxMjM0IiwiaWF0IjoxNTI2MTc2NzIxLCJleHAiOjE1MjYyNjMxMjF9.uRtRBKLhGb0K-KoYO1QA9FGvqJAxOc1ItwEQ8pYYcjY'
	
	}

	constructor(private router: Router, private http: HttpClient) {
	}

	getCodigoUsuario():number{
		return this.usuario.codigoUsuario;
	}

	getToken():string{
		return this.usuario.token;
	}

	getCodigoPeriodo():number{
		return this.usuario.codigoPeriodo;
	}

	obtenerUsuario():any{
		return this.usuario;
	}

    abrirVistaTercerNivel(path: string):void{
		this.router.navigate(['principal/'+this.usuario.tipoUsuario+'/'+path]);
    }

    iniciarSesion(usuario: any) {
		const body = this.encodeDataToURL(usuario);
		console.log(body)
		const url = urljoin(environment.apiUrl, 'login');
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    	headers = headers.append('Authorization', "3d524a53c110e4c22463b10ed32cef9d");
		console.log(headers)
		return this.http.post(url, body, { headers: headers}).subscribe(data => {   // data is a string
    console.log(data);
});
	}

	encodeDataToURL = (data) => {
    return Object
      .keys(data)
      .map(value => `${value}=${encodeURIComponent(data[value])}`)
      .join('&');
 	}

}