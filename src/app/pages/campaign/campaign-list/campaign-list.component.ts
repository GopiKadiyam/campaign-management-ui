import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../../services/api.service';
import { Campaign, Template } from '../../../interfaces/user.interface';
import { API_URL } from '../../../app.constant';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      serviceType: {
        title: 'Service Type',
        type: 'string',
      },
      flashFlag: {
        title: 'Flash Flag',
        type: 'boolean',
      },
      senderId: {
        title: 'Sender ID',
        type: 'string',
      },
      templateId: {
        title: 'Template Id',
        type: 'string',
      },
      scheduleAt: {
        title: 'Scheduled AT',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private apiService: ApiService, private datePipe: DatePipe) {
    this.apiService.doGet<Campaign[]>(API_URL.campaignURLs.campaignList).subscribe(
      val => {
        return this.source.load(val.map(v =>({ ...v, scheduleAt: datePipe.transform(v?.scheduleAt, 'medium') })))
      }
    );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
