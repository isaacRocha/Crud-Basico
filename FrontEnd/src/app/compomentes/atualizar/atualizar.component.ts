import { Component, OnInit } from '@angular/core';

import { UsuarioService, Usuario } from '../../services/usuario.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  usuario: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    senha: ''
  };

  id: any;
  constructor(private UsuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    const id: any =  this.activatedRoute.snapshot.params['id'];
    console.log(id);

 
    if(id){
      this.UsuarioService.getUsuario(id).subscribe(
        (res:any)=>{
          this.usuario =res[0] ;
          console.log(res);
        },
        err => console.log(err) 
      );
    }
  }

  atualizar() {
    this.UsuarioService.updateUsuario(this.usuario.idusuario,  this.usuario).subscribe(
        res=>{
          console.log(res)
        },
        err =>console.log(err)
    );

    this.router.navigate(['/home'])
  }
}
