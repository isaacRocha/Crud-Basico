import { Component, OnInit } from '@angular/core';

import { UsuarioService, Usuario } from '../../services/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  usuario: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    senha: ''
  };
  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar() {
    //delete this.usuario.idusuario;

    this.UsuarioService.addUsuario(this.usuario).subscribe();
    this.router.navigate(['/home'])
  }

}
