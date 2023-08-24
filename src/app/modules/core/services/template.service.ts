import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { template } from '../models/template';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = `${environment.base_url}offerscompany`;
@Injectable({
  providedIn: 'root'
})
export class TemplateService 
{

  constructor(private _http : HttpClient) { }


  public getTemplates():Observable<template[]>
  {
    return this._http.get<template[]>(
      `${base_url}/templates`)
  }

  public insertTemplates(templates:template[])
  {
    return this._http.post<template[]>(
      `${base_url}/templates`, templates)
  }

  public updateSelectionTemplate(nameTemplate:string)
  {
    return this._http.post<template>(
      `${base_url}/templateselected`, nameTemplate)
  }

  public deleteTemplate(templates:template[])
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: templates
    };

    return this._http.delete<template[]>(
      `${base_url}/templates`, httpOptions)
  }
}
