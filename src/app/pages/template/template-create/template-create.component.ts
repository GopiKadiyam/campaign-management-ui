import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SERVICE_TYPE } from '../../../interfaces/user.interface';
import { ApiService } from '../../../services/api.service';
import { ToasterService } from '../../../services/toaster.service';
import { API_URL } from '../../../app.constant';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'ngx-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.scss']
})
export class TemplateCreateComponent implements OnInit {
  createTemplateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    senderId: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
    templateId: new FormControl('', [Validators.required]),
    templateBody: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.createTemplateForm.get('name');
  }

  get description() {
    return this.createTemplateForm.get('description');
  }

  get senderId() {
    return this.createTemplateForm.get('senderId');
  }

  get serviceType() {
    return this.createTemplateForm.get('serviceType');
  }

  get status() {
    return this.createTemplateForm.get('status');
  }

  get templateId() {
    return this.createTemplateForm.get('templateId');
  }

  get templateBody() {
    return this.createTemplateForm.get('templateBody');
  }

  public serviceTypes: SERVICE_TYPE[] = Object.values(SERVICE_TYPE);
  senderIds!: string[];

  createTemplateLoading = false;
  templateCreationFailed = false;


  constructor(private apiService: ApiService, private toaster: ToasterService) { }

  ngOnInit(): void {
    this.apiService.doGet<string[]>(API_URL.senderURLs.getAllSenderIds).subscribe(
      val => this.senderIds = val
    )
  }


  createTemplate() {
    if (this.createTemplateForm?.valid) {
      this.createTemplateLoading = true;
      console.log(this.createTemplateForm.value)

      this.apiService.doPost<any>(API_URL.templateURLs.createTemplate, this.createTemplateForm.value)
        .pipe(
          catchError(err => {
            this.createTemplateLoading = false;
            this.templateCreationFailed = true;
            this.toaster.showCustomToastAndIcon("danger", "Template Creation Failed", err?.message, "")
            return err;
          })
        )
        .subscribe(res => {
          console.log(res);
          this.createTemplateForm.reset();
          this.createTemplateLoading = false;
          this.templateCreationFailed = false;
          this.toaster.showCustomToastAndIcon("success", "Template ID : " + res?.templateId, "Template Created successfully", "")
        });
    }
  }
}
