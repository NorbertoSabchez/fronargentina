import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona';
import { personaService } from '../servicios/personaService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona:persona[];
  constructor(
    public personaService: personaService
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
