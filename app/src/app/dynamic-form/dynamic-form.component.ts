import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Observable } from "rxjs";
import { IForm } from "../iform";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  @Input() openedInDialog = true;
  model: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  save() {
    let service = this.getService();

    service.subscribe(() => {});
  }

  public getService(): Observable<any> {
    const values = this.form.fields.map((x) => {
      return {
        name: x.name,
        value: x.value,
      };
    });
    values.forEach((x) => {
      this.model[x.name] = x.value;
    });

    const actionSave = this.form.actions[0];
    let service: Observable<any>;
    if (this.model.id > 0)
      service = this.http.put(`${actionSave.url}/${this.model.id}`, this.model);
    else service = this.http.post(actionSave.url, this.model);

    return service;
  }
}
