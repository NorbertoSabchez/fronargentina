import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdGuardService as guard } from "./guards/prod-guard.service";
import { LoginComponent } from "./login/login/login.component";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { RegistroComponent } from "./registro/registro/registro.component";


const routes: Routes = [
    {path : 'Portfolio', component:PortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    {path : 'Login', component:LoginComponent},
    {path : 'Registro', component:RegistroComponent},
    {path : '', redirectTo: 'Login',pathMatch:'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}