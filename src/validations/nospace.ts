'use strict';
import { AbstractControl } from '@angular/forms';

export function NoSpaceValidator(control: AbstractControl): { [s: string]: boolean } {
	let re = / /;
	if ( control.value && control.value.toString().trim() == '' ) {
		return { nospace: true };
	}
}