import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../commons/estudiante-service';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../commons/usuario-service';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css'],
  providers: [EstudianteService, UsuarioService]
})
export class NuevoEstudianteComponent implements OnInit {

	private nuevoEstudiante: any = {codigoGenero: '1', codigoEstadoCivil: '1', codigoTipoIdentificacion: '1', codigoModalidad: '1'};
	private listaDepartamentos: Observable<any>;
	private listaMunicipios: Observable<any>;
	private listaColegios: Observable<any>;
	private listaTitulosCentrosEducativos: Observable<any>;
	private listaCampus: Array<any>;
	private listaCarreras: Array<any>;
	private departamentoSeleccionado: any = {codigoDepartamento: null, nombreDepartamento: 'Departamento'};
	private departamentoResidenciaSeleccionado: any = {codigoDepartamento: null, nombreDepartamento: 'Departamento'};
	private municipioSeleccionado: any = {codigoMunicipio: null, nombreMunicipio: 'Municipio'};
	private municipioResidenciaSeleccionado: any = {codigoMunicipio: null, nombreMunicipio: 'Municipio'};
	private colegioSeleccionado: any = {codigoCentroEducativo: null, nombreCentroEducativo: 'Colegio procedencia'};
	private listaTitulosSeleccionados: Array<any> = [];
	private campusSeleccionado: any = {codigoCampus: null, nombreCampus: 'Campus universitario de estudio'};
	private carreraSeleccionada: any = {codigoCarrera: null, nombreCarrera: 'Carrera de estudio'};
	private listaTabs: Array<any> = [{titulo: 'Info. personal', activo: true, bloqueado: false},
									 {titulo: 'Info. familiar', activo: false, bloqueado: true},
									 {titulo: 'Info. Pre - universitaria', activo: false, bloqueado: true},
									 {titulo: 'Info. Universitaria', activo: false, bloqueado: true}];
	
	private mostrarErrorIdentificacion: boolean = false;
	private habilitarFormulario: boolean = true;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private estudianteService: EstudianteService) { }

	ngOnInit() {
		
	}

	guardarRegistroEstudiante():void{
		this.habilitarFormulario = false;
		this.nuevoEstudiante.codigoLugarResidencia = this.municipioResidenciaSeleccionado.codigoMunicipio;
		this.nuevoEstudiante.codigoCentroEducativo = this.colegioSeleccionado.codigoCentroEducativo;
		this.nuevoEstudiante.codigoCampus = this.campusSeleccionado.codigoCampus;
		this.nuevoEstudiante.codigoCarrera = this.carreraSeleccionada.codigoCarrera;
		this.nuevoEstudiante.correoInstitucional = this.nuevoEstudiante.correoInstitucional+'@unah.hn';
		this.nuevoEstudiante.listaTitulosPreUniversitarios = [];
		for(let i = 0; i<this.listaTitulosSeleccionados.length; i++)
			this.nuevoEstudiante.listaTitulosPreUniversitarios.push(this.listaTitulosSeleccionados[i].codigoCarrera);
		console.log(this.nuevoEstudiante);

		this.estudianteService
		.registrarEstudiante(this.nuevoEstudiante)
		.subscribe(
			(respuesta) =>{
				this.habilitarFormulario = true
				if(respuesta.exito){
					let resp = confirm('Se ha enviado con éxito su inscripción');
					this.router.navigate(['inicio']);
				}
				else{
					let resp = confirm('Se ha ocurrido un error al enviar su inscripción');
				}
			},
			(error) =>{
				let resp = confirm('Se ha ocurrido un error al enviar su inscripción');
				this.habilitarFormulario = true
			}
		)
	}
}
