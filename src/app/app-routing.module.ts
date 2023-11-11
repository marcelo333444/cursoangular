import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },// pagina principal iniciada
  { path: 'login', component: AuthComponent }, //path ruta del auth component
  {
    path: 'dashboard', component: PagesComponent, // path ruta del modulo student
    children: [
      {
        path: 'student', //se declara como hijo al modulo student para navegar desde el path dashboard
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
