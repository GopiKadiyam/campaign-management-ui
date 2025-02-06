import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(
    private _router: Router
  ) { }

  changePassword(event: Event): void {
    event.preventDefault();
    // Add sign-in logic here
    console.log('changePassword submitted');
  }
  signInLink(): void {
    this._router.navigateByUrl('/auth');
  }

}
