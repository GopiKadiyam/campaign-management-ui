import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTimepickerModule, NbToggleModule } from '@nebular/theme';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    CampaignComponent,
    CreateCampaignComponent,
    CampaignListComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampaignRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NgxDropzoneModule,
    NbAccordionModule 
  ]
})
export class CampaignModule { }
