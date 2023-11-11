import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor( private router: Router) { //router service declarado en pages module

  }

  login(){
    this.router.navigateByUrl('/dashboard/student/studentCreate'); //con la funcion clik se redirige a la pagina indicada
  }

}
