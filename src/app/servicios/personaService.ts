import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona';


@Injectable({
    providedIn: 'root'
  })


  export class personaService {
    private apiServerUrl='https://apiportfolioback.herokuapp.com/'
        constructor(private http:HttpClient){ }

        public obtenerPersona():Observable<persona[]>{
            return this.http.get<persona[]>(`${this.apiServerUrl}persona/` + "ver" );
          }
          public editarPersona(persona: persona):Observable<persona>{
            return this.http.put<persona>(`${this.apiServerUrl}persona/editar`, persona);
        }
  }