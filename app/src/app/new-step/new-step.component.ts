import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IType } from "../iform";

@Component({
  selector: "app-new-step",
  templateUrl: "./new-step.component.html",
  styleUrls: ["./new-step.component.css"],
})
export class NewStepComponent implements OnInit {
  @Output() select= new EventEmitter<IType>();
  types: IType[] = [
    {
      icon: "list_alt",
      name: "Formulário",
      subtitle: "crie formulários",
      value: "form"
    },
    {
      icon: "approval",
      name: "Aprovações",
      subtitle: "crie uma etapa de aprovação",
      value: "approval"
    },
    {
      icon: "cloud_upload",
      name: "Drive",
      subtitle: "faça upload para um drive",
      value: "drive "
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
