import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../../@core/services/api.service';
import { Sender } from '../../../interfaces/user.interface';
import { API_URL } from '../../../app.constant';

@Component({
  selector: 'ngx-sender-list',
  templateUrl: './sender-list.component.html',
  styleUrls: ['./sender-list.component.scss']
})
export class SenderListComponent {


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
      senderId: {
        title: 'Sender ID',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      serviceType: {
        title: 'Service Type',
        type: 'string',
      },
      entityId: {
        title: 'Entity Id',
        type: 'string',
      },
      isOpen: {
        title: 'Is Open',
        type: 'string',
      },
      statusFlag: {
        title: 'Status',
        type: 'boolean',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private apiService: ApiService) {
    this.apiService.doGet<Sender[]>(API_URL.senderURLs.senderList).subscribe(
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
