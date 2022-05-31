import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudios } from '../model/educacion.model';
import { eduService } from '../servicios/EduService';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estt: Estudios[];
  public editarEst: Estudios | undefined;
  public deleteEst: Estudios | undefined;
  roles: string[];
  isAdmin = false;


  constructor(public EduService:eduService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.traerEst();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  traerEst(){
    this.EduService.obtenerEst().subscribe(data =>{
      this.estt = data;
    })
  }

  public onOpenModal(mode: string, estudio?: Estudios): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEstModal');
    } else if (mode === 'delete') {
      this.deleteEst=estudio;
      button.setAttribute('data-bs-target', '#deleteEstModal');
    } else if (mode === 'edit') {
      this.editarEst=estudio;
      button.setAttribute('data-bs-target', '#editEstModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEst(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.EduService.agregarEst(addForm.value).subscribe({
      next: (response: Estudios) => {
        console.log(response);
        this.traerEst();
        addForm.reset();
      }
    })
  }

  public onUpdateEst(estudio: Estudios): void {
    this.editarEst= estudio;
    this.EduService.editarEst(estudio).subscribe( data =>{
      this.editarEst = data;
      console.log(data);
        this.traerEst();
    })
  }


  public onDeleteEst(id: number): void {
    this.EduService.borrarEst(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerEst();
      }
    })
  }

}
