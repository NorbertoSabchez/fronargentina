import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../model/persona';
import { personaService } from '../servicios/personaService';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  persona:persona[];
  isLogged = false;
  constructor(
    public personaService: personaService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerYo();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
   }

   private obtenerYo(){
      this.personaService.obtenerPersona().subscribe(dato =>{
        this.persona = dato;
      });
    
   }
   onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/Login']);
  }
}
