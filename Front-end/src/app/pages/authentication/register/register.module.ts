import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [{
    path: '',
    data: {
        title: 'Register page',
        urls: [{title: 'register',url: '/register'},{title: 'Starter page'}]
    },
    component: RegisterComponent
}];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes)
    ]
})
export class RegisterModule { }