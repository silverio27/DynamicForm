import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { IForm } from "../iform";

@Component({
  selector: "app-form-lists",
  templateUrl: "./form-lists.component.html",
  styleUrls: ["./form-lists.component.css"],
})
export class FormListsComponent implements OnInit {
  forms: IForm[]=[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<IForm[]>("http://localhost:3000/forms").subscribe((x) => {
      this.forms = x;
    });
  }
}
