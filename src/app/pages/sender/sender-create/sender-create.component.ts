import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COUNTRY, Sender, SERVICE_TYPE } from '../../../interfaces/user.interface';
import { ApiService } from '../../../services/api.service';
import { API_URL } from '../../../app.constant';
import { catchError } from 'rxjs/operators';
import { ToasterService } from '../../../services/toaster.service';

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
    status: new FormControl(false, [Validators.required]),
  });

  get senderId() {
    return this.createSenderForm.get('senderId');
  }

  get description() {
    return this.createSenderForm.get('description');
  }

  get country() {
    return this.createSenderForm.get('country');
  }

  get serviceType() {
    return this.createSenderForm.get('serviceType');
  }

  get entityId() {
    return this.createSenderForm.get('entityId');
  }

  get isOpen() {
    return this.createSenderForm.get('isOpen');
  }

  get status() {
    return this.createSenderForm.get('status');
  }


  public serviceTypes: SERVICE_TYPE[] = Object.values(SERVICE_TYPE);
  public countries: COUNTRY[] = Object.values(COUNTRY);
  createSenderLoading = false;
  senderCreationFailed = false;

  constructor(private apiService: ApiService, private toaster: ToasterService) { }

  createSender() {
    if (this.createSenderForm?.valid) {
      this.createSenderLoading = true;
      console.log(this.createSenderForm.value);
      this.apiService.doPost<any>(API_URL.senderURLs.createSender, this.createSenderForm.value)
        .pipe(
          catchError(err => {
            this.createSenderLoading = false;
            this.senderCreationFailed = true;
            this.toaster.showCustomToastAndIcon("danger", "Sender Creation Failed", err?.message, "")
            return err;
          })
        )
        .subscribe(res => {
          console.log(res);
          this.createSenderForm.reset();
          this.createSenderLoading = false;
          this.senderCreationFailed = false;
          this.toaster.showCustomToastAndIcon("success", "SENDER ID : " + res?.senderId, "Sender Created successfully", "")
        });
    }
  }


}
