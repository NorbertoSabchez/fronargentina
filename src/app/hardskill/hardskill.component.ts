import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from '../model/skills.model';
import { skillsService } from '../servicios/skillsService';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-hardskill',
  templateUrl: './hardskill.component.html',
  styleUrls: ['./hardskill.component.css']
})
export class HardskillComponent implements OnInit {
  skillss: Skills[];
  public editarSkill: Skills | undefined;
  public deleteSkill: Skills | undefined;
  roles: string[];
  isAdmin = false;

  constructor(public skillsService: skillsService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.traerSkills();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  traerSkills(){
    this.skillsService.obtenerSkill().subscribe(data =>{
      this.skillss = data});
  }

  public onOpenModal(mode: string, skills: Skills): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addSkillModal');
    } else if (mode === 'delete') {
      this.deleteSkill = skills;
      button.setAttribute('data-bs-target', '#deleteSkillModal');
    } else if (mode === 'edit') {
      this.editarSkill = skills;
      button.setAttribute('data-bs-target', '#editSkillModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddSkills(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.skillsService.agregarSkill(addForm.value).subscribe({
      next: (response: Skills) => {
        console.log(response);
        this.traerSkills();
        addForm.reset();
      }
    })
  }

  public onUpdateSkills(skill: Skills): void {
    this.editarSkill= skill
    this.skillsService.editarSkill(skill).subscribe( data =>{
      this.editarSkill = data;
      console.log(data);
        this.traerSkills();
    })
  }

  public onDeleteSkills(id: number): void {
    this.skillsService.borrarSkill(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerSkills();
      }
    })
  }

}
  
  



