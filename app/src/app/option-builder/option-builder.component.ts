import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IField, IOption } from "../iform";

@Component({
  templateUrl: "./option-builder.component.html",
  styleUrls: ["./option-builder.component.css"],
})
export class OptionBuilderComponent implements OnInit {
  option = {} as IOption;
  constructor(@Inject(MAT_DIALOG_DATA) public field: IField) {}

  ngOnInit(): void {}

  add() {
    let option = Object.assign({}, this.option);
    this.field.options?.push(option);
    this.option = {} as IOption;
  }
}
