import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormListsComponent } from "./form-lists/form-lists.component";
import { FormViewComponent } from "./form-view/form-view.component";

const routes: Routes = [
  { path: "form-lists", component: FormListsComponent },
  { path: "form-view/:id", component: FormViewComponent },
  { path: "", pathMatch: "full", redirectTo: "form-lists" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
