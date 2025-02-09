import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateCreateComponent } from './template-create/template-create.component';
import { TemplateComponent } from './template.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateListComponent,
    TemplateCreateComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    NbSpinnerModule
  ]
})
export class TemplateModule { }
