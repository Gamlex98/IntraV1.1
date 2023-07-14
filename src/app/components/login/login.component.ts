import { Component , OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngAfterViewInit(): void {
    this.avisoAlert();
  }

  avisoAlert() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: `Este componente se encuentra en Construcción !`,
      text: 'Pronto estará disponible , se encuentra en proceso de desarrollo...',
      showConfirmButton: true,
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }

}
