import { Component, OnInit } from "@angular/core";
import { PoPageDynamicEditActions } from "@po-ui/ng-templates";
import { Tasks } from "./tasks";

@Component({
  templateUrl: "./edit-tasks.component.html",
})
export class EditTasksComponent extends Tasks implements OnInit  {
  
  public readonly actions: PoPageDynamicEditActions = {
    save: '/tasks',
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
