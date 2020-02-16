import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourcePesquisaComponent } from './source-pesquisa/source-pesquisa.component';
import { RouterModule } from '@angular/router';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';


@NgModule({
  declarations: [PessoasCadastroComponent, PessoasPesquisaComponent, SourcePesquisaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports :[
    PessoasCadastroComponent, PessoasPesquisaComponent, SourcePesquisaComponent
  ],
  entryComponents: [MatConfirmDialogComponent],
  providers:[
    DatePipe
  ]
})
export class PessoasModule { }
