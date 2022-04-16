import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlowComponent } from "./flow/flow.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { FormListsComponent } from "./form-lists/form-lists.component";
import { FormViewComponent } from "./form-view/form-view.component";
import { NewFlowComponent } from "./new-flow/new-flow.component";

const routes: Routes = [
  { path: 'flow', component: FlowComponent },
  { path: 'new-flow', component: NewFlowComponent },
  { path: "form-lists", component: FormListsComponent },
  { path: "form-view/:id", component: FormViewComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: "", pathMatch: "full", redirectTo: "flow" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
