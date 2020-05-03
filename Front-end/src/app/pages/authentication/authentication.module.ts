import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Starter page',
      urls: [{title: 'Dashboard',url: '/authentication'},{title: 'Starter page'}]
    },
	component: AuthenticationComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
		NgbModule.forRoot(),
		RouterModule.forChild(routes)
    ]
})
export class AuthenticationModule { }