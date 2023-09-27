import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { dashboardGuard } from 'src/core/dashboard.guard';
import { adminGuard } from 'src/core/admin.guard';
import { leyoutGuard } from 'src/core/leyout.guard';

const routes: Routes = [
  {path:'',component:NavbarComponent,

  canActivateChild:[leyoutGuard],
   children:[
    {path:'',loadChildren:()=> import('../admin/users/users.module').then(m=> m.UsersModule)},

      {path:'user',loadChildren:()=> import('../admin/users/users.module').then(m=> m.UsersModule)}
    
   ]
   
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
