import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'lista',
   // loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
   loadChildren: './lista/lista.module#ListaPageModule'
  },
  {
    path: 'usuario',
    loadChildren: './usuario/usuario.module#UsuarioPageModule'
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'nuevalista',
    loadChildren: () => import('./nuevalista/nuevalista.module').then( m => m.NuevalistaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }