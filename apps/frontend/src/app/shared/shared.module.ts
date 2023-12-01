import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule, MatTableModule,
  ]
  ,
  exports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    MatDialogModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule
  ],
  providers: []
})
export class SharedModule { }
