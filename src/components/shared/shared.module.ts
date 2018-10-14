import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,
		
	],
	declarations: [], 
	exports: [
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule		
	], 
	providers: []
})
export class SharedModule { }
