import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastrService: NbToastrService) { }

  config: NbToastrConfig;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  public showCustomToastAndIcon(type: NbComponentStatus, title: string, body: string,icon: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 5000,
      position: this.position,
      preventDuplicates: false,      
      hasIcon: true,
      icon: icon
    };
    const titleContent = title ? ` ${title}` : '';

    this.toastrService.show(body, `${titleContent}`, config);
  }
}
