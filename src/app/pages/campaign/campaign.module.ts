import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';


@NgModule({
  declarations: [
    CampaignComponent,
    CreateCampaignComponent,
    CampaignListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampaignRoutingModule,
  ]
})
export class CampaignModule { }
