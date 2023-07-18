import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mostrarNavbar:boolean = true;

  constructor(private router:Router){}

  ngOnInit(){
    // Llamos al método que comprueba la vista actual
    this.comprobarVista();
  }

  comprobarVista(){
    // Asignamos a la variable las vistas login y register
    this.router.events.subscribe((val) => {
      this.mostrarNavbar = !this.router.url.includes("login") && !this.router.url.includes("register");
    });
  }
}
