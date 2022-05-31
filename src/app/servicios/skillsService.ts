import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Skills } from "../model/skills.model";


@Injectable({
    providedIn: 'root'
})

export class skillsService{
    private apiServerUrl='https://apiportfolioback.herokuapp.com';

    constructor(private http:HttpClient){}

        public obtenerSkill():Observable<Skills[]>{
            return this.http.get<Skills[]>(`${this.apiServerUrl}/skill/ver`);
          }
        public agregarSkill(skills: Skills):Observable<Skills>{
            return this.http.post<Skills>(`${this.apiServerUrl}/skill/new`, skills);
        }
        public editarSkill(skills: Skills):Observable<Skills>{
            return this.http.put<Skills>(`${this.apiServerUrl}/skill/editar`, skills);
        }
        public borrarSkill(idSkill: number):Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/skill/delete/${idSkill}`);
        }

    }