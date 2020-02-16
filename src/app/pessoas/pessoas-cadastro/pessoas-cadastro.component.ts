import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa-model';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoasService } from '../pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class PessoasCadastroComponent implements OnInit {
  
  sexos = [
    {value: 'MASCULINO', viewValue: 'Masculino'},
    {value: 'FEMININO', viewValue: 'Feminino'},
  ];
    
  entidade = 'Pessoa';
  pessoa: Pessoa = new Pessoa();
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(
    private router: Router,
    private rota: ActivatedRoute,
    private service: PessoasService,
    private snackBar: MatSnackBar,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    const idAgencia = this.rota.snapshot.params['id'];
    if (idAgencia) {
      this.buscarCliente(idAgencia);
    }
  }


  get editando() {
    return Boolean(this.pessoa.id);
  }

  salvar() {
    if(this.pessoa.dataNascimento){
      this.pessoa.dataNascimento = this.datepipe.transform(this.pessoa.dataNascimento, 'dd/MM/yyyy');
    }
    this.service.adicionar(this.pessoa).then(dados => {
      this.router.navigate(['/pessoas']);
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 5000
      });
    });
  }

  buscarCliente(idPessoa: number) {
    this.service.buscarPorCodigo(idPessoa)
    .then(pessoa => {
      this.pessoa = pessoa;
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 5000
      });
    });
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
