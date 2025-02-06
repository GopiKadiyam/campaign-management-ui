import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    children:[
      {
        path: '',
        component: CampaignListComponent
      },
      {
        path: 'create-campaign',
        component: CreateCampaignComponent
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
