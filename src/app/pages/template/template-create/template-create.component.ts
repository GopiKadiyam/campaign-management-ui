import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SERVICE_TYPE } from '../../../interfaces/user.interface';

@Component({
  selector: 'ngx-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.scss']
})
export class TemplateCreateComponent {
  createTemplateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    sender: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    templateID: new FormControl('', [Validators.required]),
    templateBody: new FormControl('', [Validators.required]),
  });
  public serviceTypes: SERVICE_TYPE[] = Object.values(SERVICE_TYPE);
  senderIds:any[]=["123","34","46"];
  createTemplate() {
    console.log(this.createTemplateForm.value)
  }
}
