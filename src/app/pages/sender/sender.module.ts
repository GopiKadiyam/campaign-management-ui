import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenderRoutingModule } from './sender-routing.module';
import { SenderComponent } from './sender.component';
import { SenderListComponent } from './sender-list/sender-list.component';
import { SenderCreateComponent } from './sender-create/sender-create.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbToggleModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SenderComponent, SenderListComponent, SenderCreateComponent],
  imports: [
    CommonModule,
    SenderRoutingModule,
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
export class SenderModule { }
