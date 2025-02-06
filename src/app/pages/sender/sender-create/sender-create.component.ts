import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRY, Sender, SERVICE_TYPE } from '../../../interfaces/user.interface';
import { ApiService } from '../../../@core/services/api.service';
import { API_URL } from '../../../app.constant';

@Component({
  selector: 'ngx-sender-create',
  templateUrl: './sender-create.component.html',
  styleUrls: ['./sender-create.component.scss']
})
export class SenderCreateComponent {

  createSenderForm = new FormGroup({
    senderId: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    entityId: new FormControl('', [Validators.required]),
    isOpen: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  public serviceTypes: SERVICE_TYPE[] = Object.values(SERVICE_TYPE);
  public countries: COUNTRY[] = Object.values(COUNTRY);

  constructor(private apiService: ApiService) { }

  createSender() {
    console.log(this.createSenderForm.value);
    const json = this.createSenderForm.value;
    //   {
    //     "senderId": "3456GH",
    //     "description": "GH Hellow worls",
    //     "country": "INDIA",
    //     "serviceType": "TRANSACTIONAL",
    //     "entityId": "567",
    //     "isOpen": "yes",
    //     "status": true
    // };
    this.apiService.doPost<any>(API_URL.senderURLs.createSender, json)
      .subscribe(val => {
        console.log("sender create")
        console.log(val);
      });
    // this.apiService.doGet<Sender[]>(API_URL.senderURLs.senderList).subscribe(
    //   val => console.log(val)
    // );
  }


}
