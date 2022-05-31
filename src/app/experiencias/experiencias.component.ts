import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exp } from '../model/exp.model';
import { expService } from '../servicios/expService';

import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  exps: Exp[];
  public editarExp: Exp | undefined;
  public deleteExp: Exp | undefined;
  roles: string[];
  isAdmin = false;

  constructor(public expService: expService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.traerExp();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  traerExp(){
    this.expService.obtenerExp().subscribe(data =>{
      this.exps = data});
  }

  public onOpenModal(mode: string, exp?: Exp): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addExpModal');
    } else if (mode === 'delete') {
      this.deleteExp = exp;
      button.setAttribute('data-bs-target', '#deleteExpModal');
    } else if (mode === 'edit') {
      this.editarExp = exp;
      button.setAttribute('data-bs-target', '#editExpModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddExp(addForm: NgForm): void {
    document.getElementById('add-exp-form')?.click();
    this.expService.agregarExp(addForm.value).subscribe({
      next: (response: Exp) => {
        console.log(response);
        this.traerExp();
        addForm.reset();
      }
    })
  }

  public onUpdateExp(exxp: Exp): void {
    this.editarExp= exxp
    this.expService.editarExp(exxp).subscribe( data =>{
      this.editarExp = data;
      console.log(data);
        this.traerExp();
    })
  }

  public onDeleteSkills(id: number): void {
    this.expService.borrarExp(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerExp();
      }
    })
  }

}
  
  



