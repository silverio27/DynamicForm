import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'new-tasks', component: EditTasksComponent },
  { path: 'edit-tasks/:id', component: EditTasksComponent },
  { path: '', pathMatch: 'full', redirectTo: 'tasks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
