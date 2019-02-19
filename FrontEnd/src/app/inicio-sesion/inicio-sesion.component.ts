import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../commons/session/user';
import { TipoPersona } from '../../commons/session/user';
import { UsuarioService } from '../../commons/usuario-service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers: [UsuarioService]
})
export class InicioSesionComponent implements OnInit {

	private tipoUsuario: string;
	private lblAviso1: string;
	private lblAviso2: string;
	private lblTituloPrimerInput: string;
	constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { 
		//console.log(params);
	}

	ngOnInit() {
		// subscripción al observable params
	    this.activatedRoute.params
		.subscribe(params => {
			this.tipoUsuario = params['tipoUsuario'].toString();
			switch (this.tipoUsuario) {
				case "estudiante":
					this.lblAviso1 = 'Para accesar a los servicios estudiantiles debes autenticarte';
					this.lblAviso2 = 'Ingresa tu número de cuenta y clave';
					this.lblTituloPrimerInput = 'Número de cuenta';
					break;
				case "docente":
					this.lblAviso1 = 'Para accesar a los servicios de docente debes autenticarte';
					this.lblAviso2 = 'Ingresa tu número de personal y clave';
					this.lblTituloPrimerInput = 'Número de personal';
					break;
				
				case "administracion":
					this.lblAviso1 = 'Para accesar a los servicios administrativos debes autenticarte';
					this.lblAviso2 = 'Ingresa tu número de personal y clave';
					this.lblTituloPrimerInput = 'Número de personal';
					break;

				default:
					break;
			}
		});

		
	}

	iniciarSesion(contrasenia, numeroCuenta):void{

		console.log(contrasenia)
		let initialize = this.usuarioService.iniciarSesion({numeroCuenta: numeroCuenta, contrasenia: contrasenia})
		console.log(initialize)
	}

}
