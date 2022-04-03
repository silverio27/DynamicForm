import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { Tasks } from './tasks';

@Component({
  templateUrl: './tasks.component.html',
})
export class TasksComponent extends Tasks implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  readonly actions: PoPageDynamicTableActions = {
    new: '/new-tasks',
    edit: 'edit-tasks/:id',
    remove: true
  };

}
