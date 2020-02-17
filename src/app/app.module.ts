import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes, RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SourcePesquisaComponent } from './pessoas/source-pesquisa/source-pesquisa.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
// import { MaterialModule } from '@angular/material';


const rotas: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'pessoas',  component: PessoasPesquisaComponent},
  { path: 'pessoas/novo',  component: PessoasCadastroComponent},
  { path: 'pessoas/:id',  component: PessoasCadastroComponent},
  { path: 'source',  component: SourcePesquisaComponent},
  { path: 'login',  component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    PessoasModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(rotas),
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MatConfirmDialogComponent
  ]
})
export class AppModule { }
