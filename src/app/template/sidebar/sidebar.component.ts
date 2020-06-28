import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarios:Usuario[]=[];
  convidadoLogado: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.convidadoLogado = this.authService.getConvidadoAutenticado();
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login'])
  }

}
