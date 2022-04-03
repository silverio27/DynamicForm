import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  fields = [
    {
      property: "id",
      type: "number",
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


  ngOnInit(): void {
  }
  readonly actions: PoPageDynamicTableActions = {
    new: '/new-tasks',
    edit: 'edit-tasks/:id',
    remove: true
  };

}
