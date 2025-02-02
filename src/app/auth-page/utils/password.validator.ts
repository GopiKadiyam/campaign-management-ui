import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { required: true };
    }

    const value = control.value;
    const errors: any = {};

    if (value.length < 8) {
      errors.minLength = 'Password must be at least 8 characters long.';
    }

    if (!/[A-Z]/.test(value)) {
      errors.upperCase = 'Password must contain at least one uppercase letter.';
    }

    if (!/[0-9]/.test(value)) {
      errors.numeric = 'Password must contain at least one numeric character.';
    }

    if (!/[$@$!%*?&]/.test(value)) {
      errors.specialChar = 'Password must contain at least one special character ($@$!%*?&).';
    }

    return Object.keys(errors).length ? errors : null;
  };
}
