import { Component, OnInit, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import { IFlow, IForm, IStep, IType } from "../iform";

@Component({
  selector: "app-new-flow",
  templateUrl: "./new-flow.component.html",
  styleUrls: ["./new-flow.component.css"],
})
export class NewFlowComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  flow = {} as IFlow;
  isOpen = false;
  constructor() {}

  ngOnInit(): void {
    this.flow.steps = [];
  }

  addStep(type: IType) {
    const step: IStep = {
      name: type.name,
      type: type.value as "form" | "approval" | "drive",
      typeInfo: type,
      value: {} as IForm
    };
    this.flow.steps.push(step)
  }
}
