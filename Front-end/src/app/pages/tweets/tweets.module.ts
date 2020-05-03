import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TweetComponent} from './tweets.component';

const routes: Routes = [
    {
        path: '',
        component: TweetComponent
    }

];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
    ],
    declarations: [
        TweetComponent
    ]
})
export class TweetModule {
}
