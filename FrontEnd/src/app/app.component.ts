import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private router: Router) { }
	
	abrirVista(path: string, tipoUsuario: string):void{
		this.router.navigate([path, tipoUsuario]);
	}

	ngOnInit():void{
		
	}
}
