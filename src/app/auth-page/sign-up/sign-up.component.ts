import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
constructor(
    private _router: Router
  ) { }

  signUp(event: Event): void {
    event.preventDefault();
    // Add sign-in logic here
    console.log('sign up submitted');

    this._router.navigate(['auth']);
  }
}
