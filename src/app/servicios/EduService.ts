import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Estudios } from "../model/educacion.model";


@Injectable({
    providedIn: 'root'
})

export class eduService{
    private apiServerUrl= 'https://apiportfolioback.herokuapp.com/'

    constructor(private http:HttpClient){}

        public obtenerEst():Observable<Estudios[]>{
            return this.http.get<Estudios[]>(`${this.apiServerUrl}est/ver`);
          }
        public agregarEst(Estudios: Estudios):Observable<Estudios>{
            return this.http.post<Estudios>(`${this.apiServerUrl}est/new`, Estudios);
        }
        public editarEst(Estudios: Estudios):Observable<Estudios>{
            return this.http.put<Estudios>(`${this.apiServerUrl}est/editar`, Estudios);
        }
        public borrarEst(idEst: number):Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}est/delete/${idEst}`);
        }

    }