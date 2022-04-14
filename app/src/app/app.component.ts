import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { IField, IForm } from "./iform";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  form!: IForm;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<IForm>("http://localhost:3000/forms/1").subscribe((x) => {
      this.form = x;
    });
  }
}
