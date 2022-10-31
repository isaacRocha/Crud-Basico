import { Component, OnInit } from '@angular/core';

import { UsuarioService, Usuario } from '../../services/usuario.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getUser!: Usuario[];
  constructor(private UsuarioService: UsuarioService, private router:Router) { }
  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario() {
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        console.log(res)
        this.getUser = <any>res;
      },
      err => console.log(err)
    );
  }

  deletar(id: any) {
    this.UsuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log('Usuario deletado');
        this.listarUsuario();
      },
      err => console.log(err)
    );
  }

  atualizar(id: any) {
      this.router.navigate(['/atualizar/'+id]);
  }
}
