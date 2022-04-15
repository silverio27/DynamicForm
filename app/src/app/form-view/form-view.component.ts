import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IForm } from "../iform";
import { Observable, switchMap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { FormEditDialogComponent } from "../form-edit-dialog/form-edit-dialog.component";

@Component({
  selector: "app-form-view",
  templateUrl: "./form-view.component.html",
  styleUrls: ["./form-view.component.css"],
})
export class FormViewComponent implements OnInit {
  form!: IForm;
  data: any[] = [];
  displayedColumns: string[] = [];
  constructor(
    private http: HttpClient,
    route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    route.params
      .pipe(
        switchMap((param) =>
          this.http.get<IForm>(`http://localhost:3000/forms/${param["id"]}`)
        )
      )
      .pipe(
        switchMap((form) => {
          this.form = form;
          this.form.fields.push({
            type: "action",
            label: "Deletar",
            name: "delete",
            visible: false,
          });
          this.form.fields.push({
            type: "action",
            label: "Editar",
            name: "edit",
            visible: false,
          });
          return this.http.get<any[]>(form.view.url);
        })
      )
      .subscribe((data) => {
        this.displayedColumns = Object.keys(data[0]);
        this.displayedColumns.push("delete");
        this.displayedColumns.push("edit");
        this.data = data;
      });
  }

  ngOnInit(): void {}

  novo() {
    this.CleanFormValues();
    this.openDialog();
  }
  private openDialog() {
    let dialog = this.dialog.open(FormEditDialogComponent, {
      data: this.form,
    });

    dialog
      .afterClosed()
      .pipe(switchMap((action:Observable<any>)=> action))
      .pipe(switchMap(() => this.http.get<any>(this.form.view.url)))
      .subscribe((x) => {
        this.data = x;
      });
  }

  delete(element: any) {
    this.http
      .delete<any>(`${this.form.view.url}/${element.id}`)
      .pipe(switchMap(() => this.http.get<any>(this.form.view.url)))
      .subscribe((x) => {
        this.data = x;
      });
  }
  edit(element: any) {
    this.FillFormValues(element);
    this.openDialog();
  }

  private FillFormValues(element: any) {
    let fields = this.form.fields;
    let values = Object.keys(element).map((key) => ({
      name: key,
      value: element[key],
    }));
    fields.forEach((field) => {
      field.value = values.find((x) => x.name == field.name)?.value;
    });
  }

  private CleanFormValues() {
    let fields = this.form.fields;
    fields.forEach((field) => {
      delete field.value
    });
  }
}
