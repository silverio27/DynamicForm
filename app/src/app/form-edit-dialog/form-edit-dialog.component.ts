import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IForm } from '../iform';

@Component({
  templateUrl: './form-edit-dialog.component.html',
  styleUrls: ['./form-edit-dialog.component.css']
})
export class FormEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public form: IForm, public dialogRef: MatDialogRef<FormEditDialogComponent>) {}

  ngOnInit(): void {
  }

}
