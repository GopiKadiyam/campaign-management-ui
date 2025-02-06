import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateCreateComponent } from './template-create/template-create.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: TemplateListComponent
      },
      {
        path: 'create-template',
        component: TemplateCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
