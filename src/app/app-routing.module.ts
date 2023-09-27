import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { loginGuard } from 'src/core/login.guard';


const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent,canActivate:[loginGuard] },
 {path:'',loadChildren:()=> import('../admin/admin.module').then(m=> m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
