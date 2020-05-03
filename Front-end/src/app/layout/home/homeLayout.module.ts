import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {homeLayoutComponent} from './homeLayout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: '',
        component: homeLayoutComponent
    }

];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
    ]
})
export class homeLayoutModule {
}
