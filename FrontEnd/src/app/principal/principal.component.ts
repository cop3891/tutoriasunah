import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { UserService } from '../../commons/session/user';
import { TipoPersona } from '../../commons/session/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    private tipoUsuario: string;
    private lblAviso: string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
        // subscripción al observable params
        this.activatedRoute.params
        .subscribe(params => {
            this.tipoUsuario = params['tipoUsuario'].toString();
            console.log(this.tipoUsuario);
            switch (this.tipoUsuario) {
                case "estudiante":
                    this.lblAviso = 'Servicios al Estudiante';
                    break;
                case "docente":
                    this.lblAviso = 'Servicios al docente';
                    break;
                case "administracion":
                    this.lblAviso = 'Servicios administrativos';
                    break;
                default:
                    break;
            }
        });

        if (this.userService.tipoPersona == TipoPersona.ESTUDIANTE) {
			this.tipoUsuario = "estudiante";
		}
		else if (this.userService.tipoPersona == TipoPersona.DOCENTE) {
			this.tipoUsuario = "docente";
		}
		else if (this.userService.tipoPersona == TipoPersona.ADMINISTRACION) {
			this.tipoUsuario = "administracion";
		}
    }

    //Brayan: Funcion que abre una vista con la ruta especificada como parametro
    abrirVista(path: string):void{
        if(path == 'calificaciones')
		    this.router.navigate(['principal/'+this.tipoUsuario+'/'+path, this.tipoUsuario]);
        else
            this.router.navigate(['principal/'+this.tipoUsuario+'/'+path]);
    }

}