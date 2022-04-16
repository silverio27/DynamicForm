import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormListsComponent } from './form-lists/form-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { FormViewComponent } from './form-view/form-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormEditDialogComponent } from './form-edit-dialog/form-edit-dialog.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { OptionBuilderComponent } from './option-builder/option-builder.component';
import { FlowComponent } from './flow/flow.component';
import { NewFlowComponent } from './new-flow/new-flow.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { StepComponent } from './step/step.component';
import { NewStepComponent } from './new-step/new-step.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    FormListsComponent,
    FormViewComponent,
    FormEditDialogComponent,
    FormBuilderComponent,
    OptionBuilderComponent,
    FlowComponent,
    NewFlowComponent,
    StepComponent,
    
    NewStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    OverlayModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
