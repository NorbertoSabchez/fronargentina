import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona';
import { personaService } from '../servicios/personaService';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:persona[];
  editar: persona | undefined;
  roles: string[];
  isAdmin = false;
  
  constructor(
    private personaService: personaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.obtenerYo();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
   }

   private obtenerYo(){
      this.personaService.obtenerPersona().subscribe(dato =>{
        this.persona = dato;
      });
    
   }
   public onOpenModal(mode: string, perso: persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode === 'edit'){
      this.editar = perso
      button.setAttribute('data-bs-target', '#editpersoModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public onUpdateExp(persos: persona): void {
    this.editar= persos
    this.personaService.editarPersona(persos).subscribe( data =>{
      this.editar = data;
      console.log(data);
        this.obtenerYo();
    })
  }
}
