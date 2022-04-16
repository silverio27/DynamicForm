import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IForm } from "../iform";

@Component({
  selector: "app-form-lists",
  templateUrl: "./form-lists.component.html",
  styleUrls: ["./form-lists.component.css"],
})
export class FormListsComponent implements OnInit {
  @Input() openedInFlow = false;
  @Output() select = new EventEmitter<IForm>();
  forms: IForm[]=[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<IForm[]>("http://localhost:3000/forms").subscribe((x) => {
      this.forms = x;
    });
  }
}
