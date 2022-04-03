import { Component, OnInit } from "@angular/core";
import { PoPageDynamicEditActions } from "@po-ui/ng-templates";

@Component({
  templateUrl: "./edit-tasks.component.html",
  styleUrls: ["./edit-tasks.component.css"],
})
export class EditTasksComponent implements OnInit {
  fields = [
    {
      property: "id",
      type: "Number",
      label: "Id",
      visible: false,
      key:true
    },
    {
      property: "name",
      type: "string",
      label: "Nome",
      required: true,
    },
    {
      property: "listName",
      label: "Lista",
      type: "string",
      required: true,
    },
    {
      property: "done",
      type: "boolean",
      label: "Pronto",
      booleanTrue: "Sim",
      booleanFalse: "Não",
      required: true,
    },
  ];

  public readonly actions: PoPageDynamicEditActions = {
    save: '/tasks',

  };
  constructor() {}

  ngOnInit(): void {}
}
