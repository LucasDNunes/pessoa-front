import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa-model';
import { PessoasService } from '../pessoas.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: [
    './pessoas-pesquisa.component.css',
    '../../app.component.css'
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PessoasPesquisaComponent implements OnInit {

  Entidade = 'Pessoa';
  columnsToDisplay: string[] = ['nome', 'sexo', 'email', 'dataNascimento', 'naturalidade', 'cpf'];
  expandedElement: Pessoa | null;
  dataSource = null;
  excluir = false;

  constructor(
    private service: PessoasService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar().then(dados => {
      this.dataSource = new MatTableDataSource(dados['content']);
    });
  }

  deletar(pessoa: Pessoa): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      data: 'Deseja realemnte excluir a seguinte pessoa: ' + pessoa.nome + ' ?'
    });

    dialogRef.afterClosed().subscribe(excluir => {
      if (excluir) {
        this.service.excluir(pessoa.id).then(() => {
          this.listar();
        }).catch(erro => {
          this.snackBar.open(erro.error.message, 'fechar', {
            duration: 10000
          });
        });
      }
    });
  }

}
