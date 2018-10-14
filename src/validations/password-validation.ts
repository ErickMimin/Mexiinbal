import { AbstractControl } from '@angular/forms';
export class PasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('pass').value; // to get value in input tag
        let confirmPassword = AC.get('conPass').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('conPass').setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }
}