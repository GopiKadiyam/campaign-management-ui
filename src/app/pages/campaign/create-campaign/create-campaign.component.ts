import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateCampaignResponse, SERVICE_TYPE } from '../../../interfaces/user.interface';
import { ApiService } from '../../../services/api.service';
import { ToasterService } from '../../../services/toaster.service';
import { API_URL } from '../../../app.constant';
import { updatePathWithPlaceholders } from '../../../utils/global.util';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {

  createCampaignForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    flashFlag: new FormControl(false, [Validators.required]),
    senderId: new FormControl('', [Validators.required]),
    templateId: new FormControl('', [Validators.required]),
    scheduleAt: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.createCampaignForm.get('name');
  }

  get description() {
    return this.createCampaignForm.get('description');
  }

  get serviceType() {
    return this.createCampaignForm.get('serviceType');
  }

  get flashFlag() {
    return this.createCampaignForm.get('flashFlag');
  }

  get senderId() {
    return this.createCampaignForm.get('senderId');
  }

  get templateId() {
    return this.createCampaignForm.get('templateId');
  }

  get scheduleAt() {
    return this.createCampaignForm.get('scheduleAt');
  }

  public serviceTypes: SERVICE_TYPE[] = Object.values(SERVICE_TYPE);
  createCampaignLoading = false;
  campaignCreationFailed = false;
  senderIds!: string[];
  templateIds!: string[];
  @ViewChild('fileInput') fileInput!: ElementRef;
  isDragging = false;
  files: File[] = [];

  constructor(private apiService: ApiService, private toaster: ToasterService) { }

  ngOnInit() {
    this.apiService.doGet<string[]>(API_URL.senderURLs.getAllSenderIds)
      .pipe(catchError(err => {
        this.senderIds = [];
        return err;
      }))
      .subscribe(
        (val: string[]) => this.senderIds = val
      )
    this.createCampaignForm.get("senderId").valueChanges.subscribe(sId => {
      this.apiService.doGet<string[]>(updatePathWithPlaceholders(API_URL.templateURLs.getAllTemplateIdsBySenderId, sId))
        .pipe(catchError(err => {
          this.templateIds = [];
          return err;
        }))
        .subscribe(
          (val: string[]) => this.templateIds = val
        )
    })

  }

  createCampaign() {
    this.createCampaignLoading = true;
    console.log(this.createCampaignForm.value)
    const formData = new FormData();
    formData.append("file", this.files[0]);
    const campaignBlob = new Blob([JSON.stringify(this.createCampaignForm.value)], { type: 'application/json' });
    formData.append("campaign", campaignBlob);
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true // This ensures cookies (JWT) are sent
    };
    this.apiService.doPost<CreateCampaignResponse>(API_URL.campaignURLs.createCampaign, formData,httpOptions).pipe(
      catchError(err=>{
        this.createCampaignLoading = false;
        this.campaignCreationFailed = true;
        this.toaster.showCustomToastAndIcon("danger", "Campaign Creation Failed", err?.message, "")
        return err;
      })
    )
    .subscribe(
      (res:CreateCampaignResponse)=>{
        console.log(res);

        this.createCampaignForm.reset();
        this.files=[];
        this.createCampaignLoading = false;
        this.campaignCreationFailed = false;
        this.toaster.showCustomToastAndIcon("success", "CAMPAIGN ID : " + res?.campaignID, "Campaign Created successfully", "")
      
      }
    );

  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Important: Prevent default browser behavior
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.handleFiles(droppedFiles);
    }
  }

  onFileInputChange(event: any) {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      this.handleFiles(selectedFiles);
    }
  }

  private handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
    // Now you have the File objects in the 'files' array. You can upload them.
    console.log(this.files);
  }

  removeFileByIndex(index: number): void {
    if (index >= 0 && index < this.files.length) {
      this.files.splice(index, 1);
    }
  }
}
