import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Exp } from "../model/exp.model";



@Injectable({
    providedIn: 'root'
})

export class expService{
    private apiServerUrl='https://apiportfolioback.herokuapp.com';

    constructor(private http:HttpClient){}

        public obtenerExp():Observable<Exp[]>{
            return this.http.get<Exp[]>(`${this.apiServerUrl}/exp/ver`);
          }
        public agregarExp(Exp: Exp):Observable<Exp>{
            return this.http.post<Exp>(`${this.apiServerUrl}/exp/new`, Exp);
        }
        public editarExp(Exp: Exp):Observable<Exp>{
            return this.http.put<Exp>(`${this.apiServerUrl}/exp/editar`, Exp);
        }
        public borrarExp(idExp: number):Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/exp/delete/${idExp}`);
        }

    }