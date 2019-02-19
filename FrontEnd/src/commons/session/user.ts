import { Injectable } from '@angular/core';

export enum EstadoCivil {
  SOLTERO=1,
  CASADO=2,
  UNIONLIBRE=3,
  DIVORCIADO=4
}

export enum TipoIdentificacion{
  PASAPORTE = 1,
  TARJETAIDENTIDAD = 2
}

export enum TipoPersona{
  ESTUDIANTE = 1,
  DOCENTE = 2,
  ADMINISTRACION = 3
}

export enum Genero {
   MASCULINO = 1,
   FEMENINO = 2
}

@Injectable()
export class UserService {

  private _codigoPersona: number;
  private _nombre: string;
  private _fechaNacimiento: string;
  private _identidad: string;
  private _direccion: string;
  private _telefono: string;
  private _correoElectronico: string;
  private _estadoCivil: EstadoCivil;
  private _tipoIdentificacion: TipoIdentificacion;
  private _tipoPersona: TipoPersona;
  private _genero: Genero;
  private _codigoCampus: number;
  private _codigoMunicipioNacimiento: number;
  private _codigoMunicipioResidencia: number;


  constructor(){
    
  }

  public get codigoPersona() : number {
    return this._codigoPersona;
  }
  public set codigoPersona(codigoPersona : number) {
    this._codigoPersona = codigoPersona;
  }

  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(nombre : string) {
    this._nombre = nombre;
  }

  public get fechaNacimiento() : string {
    return this._fechaNacimiento;
  }
  public set fechaNacimiento(fechaNacimiento : string) {
    this._fechaNacimiento = fechaNacimiento;
  }

  public get identidad() : string {
    return this._identidad;
  }
  public set identidad(identidad : string) {
    this._identidad = identidad;
  }

  public get direccion() : string {
    return this._direccion;
  }
  public set direccion(direccion : string) {
    this._direccion = direccion;
  }

  public get telefono() : string {
    return this._telefono;
  }
  public set telefono(telefono : string) {
    this._telefono = telefono;
  }

  public get correoElectronico() : string {
    return this.correoElectronico;
  }
  public set correoElectronico(correoElectronico : string) {
    this._correoElectronico = correoElectronico;
  }

  public get estadoCivil() : EstadoCivil {
    return this._estadoCivil;
  }
  public set estadoCivil(estadoCivil : EstadoCivil) {
    this._estadoCivil = estadoCivil;
  }

  public get tipoIdentificacion() : TipoIdentificacion {
    return this._tipoIdentificacion;
  }
  public set tipoIdentificacion(tipoIdentificacion : TipoIdentificacion) {
    this._tipoIdentificacion = tipoIdentificacion;
  }

  public get tipoPersona() : TipoPersona {
    return this._tipoPersona;
  }
  public set tipoPersona(tipoPersona : TipoPersona) {
    this._tipoPersona = tipoPersona;
  }

  public get genero() : Genero {
    return this._genero;
  }
  public set genero(genero : Genero) {
    this._genero = genero;
  }

  public get codigoCampus() : number {
    return this._codigoCampus;
  }
  public set codigoCampus(codigoCampus : number) {
    this._codigoCampus = codigoCampus;
  }

  public get codigoMunicipioNacimiento() : number {
    return this._codigoMunicipioNacimiento;
  }
  public set codigoMunicipioNacimiento(codigoMunicipioNacimiento : number) {
    this._codigoMunicipioNacimiento = codigoMunicipioNacimiento;
  }

  public get codigoMunicipioResidencia() : number {
    return this._codigoMunicipioResidencia;
  }
  public set codigoMunicipioResidencia(codigoMunicipioResidencia : number) {
    this._codigoMunicipioResidencia = codigoMunicipioResidencia;
  }

}