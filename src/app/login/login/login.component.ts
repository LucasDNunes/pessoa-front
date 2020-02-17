import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoas/pessoa-model';
import { Usuario } from '../usuario-model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private rota: ActivatedRoute,
    private service: LoginService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this.service.logar(this.usuario).then(dados => {
      if (dados) {
        localStorage.setItem('user', this.usuario.username);
        localStorage.setItem('password', this.usuario.password);
        this.router.navigate(['/pessoas']);
      }
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 5000
      });
    });
  }
}
