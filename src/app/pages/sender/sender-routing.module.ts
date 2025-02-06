import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from './sender.component';
import { SenderListComponent } from './sender-list/sender-list.component';
import { SenderCreateComponent } from './sender-create/sender-create.component';

const routes: Routes = [
  {
    path:'',
    component: SenderComponent,
    children:[
      {
        path:'',
        component: SenderListComponent
      },
      {
        path:'create-sender',
        component: SenderCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenderRoutingModule { }
