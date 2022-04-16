import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Route, Router } from "@angular/router";
import { IAction, IField, IForm, IOption } from "../iform";
import { OptionBuilderComponent } from "../option-builder/option-builder.component";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.css"],
})
export class FormBuilderComponent implements OnInit {
  form = {
    name: ''
  } as IForm;
  field = {} as IField;
  action = {} as IAction;

  displayedColumns: string[] = [
    "name",
    "label",
    "type",
    "options",
    "key",
    "visible",
  ];
  types: string[] = ["text", "select", "boolean", "number", "action"];
  typesOfAction: string[] = ["save"];
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form.fields = [];
    this.field.options = [];
    this.form.actions = [];
    this.form.view = { url: "" };
  }

  openOptionBuilder() {
    this.dialog.open(OptionBuilderComponent, {
      data: this.field,
    });
  }

  addField() {
    const field = Object.assign({}, this.field);
    this.form.fields.push(field);
    this.field = {} as IField;
  }

  addAction() {
    const action = Object.assign({}, this.action);
    this.form.actions.push(action);
    this.action = {} as IAction;
  }

  save() {
    this.http.post("http://localhost:3000/forms", this.form).subscribe(() => {

      this.router.navigateByUrl("/");
    });
  }

}
