import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent}, // routing declarada para navegar entre paginas
  { path: 'studentCreate', component: StudentCreateComponent},
  { path: 'studentEdit/:id', component: StudentEditComponent},
  { path: 'studentDetails/id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
