import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../../@core/services/api.service';
import { Template } from '../../../interfaces/user.interface';
import { API_URL } from '../../../app.constant';

@Component({
  selector: 'ngx-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent {
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
      templateId: {
        title: 'Template ID',
        type: 'string',
      },
      senderId: {
        title: 'Sender',
        type: 'string',
      },
      serviceType: {
        title: 'Service Type',
        type: 'string',
      },
      activeStatusFlag: {
        title: 'Status',
        type: 'boolean',
      },
      templateBody: {
        title: 'templateBody',
        type: 'string',
      },
      createdOn: {
        title: 'Created At',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private apiService: ApiService) {
    this.apiService.doGet<Template[]>(API_URL.templateURLs.templateList).subscribe(
      val => this.source.load(val)
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
