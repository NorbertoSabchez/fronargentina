import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona';

import { personaService } from '../servicios/personaService';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona:persona[];
  constructor(
    private personaService: personaService
  ) { }

  ngOnInit(): void {
    this.obtenerYo();
   }

   private obtenerYo(){
      this.personaService.obtenerPersona().subscribe(dato =>{
        this.persona = dato;
      });
    
   }
   

}
