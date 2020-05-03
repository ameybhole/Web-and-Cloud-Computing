//import * as $ from 'jquery';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import {homeLayoutComponent} from "./layout/home/homeLayout.component";
import {Routes, RouterModule} from "@angular/router";
import {RightSidebarComponent} from "./shared/right-sidebar/rightsidebar.component";
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {NavigationComponent} from "./shared/header-navigation/navigation.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";
import {WebsocketService} from "./services/websocket.service";
import {HttpService} from "./services/http.service";
import {DataService} from "./services/data.service";

import {ChartsModule} from 'ng2-charts';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full',},
    {
        path: 'home', component: homeLayoutComponent, data: {title: 'Homepage Views'}, children: [
            {path: '', loadChildren: './pages/home/home.module#HomeModule'}
        ],
    },
    {path: 'authentication', component: AuthenticationComponent, data: {title: 'Authentication'}},
    {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
    {path: 'tweets', component: homeLayoutComponent, data: {title: 'Trump tweets'}, children: [
        {path: '', loadChildren: './pages/tweets/tweets.module#TweetModule'},
    ]},
    {path: 'analysis', component: homeLayoutComponent, data: {title: 'Analysis'}, children: [
        {path: '', loadChildren: './pages/analysis/analysis.module#AnalysisModule'},
    ],
    },
    {path: 'analysis/:id', component: homeLayoutComponent, data: {title: 'AnalysisById'}, children: [
        {path: '', loadChildren: './pages/analysis/analysis_id.module#AnalysisIdModule'}
    ],
    }
];

@NgModule({
    declarations: [
        AppComponent,
        homeLayoutComponent,
        AuthenticationComponent,
        BreadcrumbComponent,
        NavigationComponent,
        SidebarComponent,
        RightSidebarComponent,
        RegisterComponent,

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES, { useHash: true }),
        NgbModule.forRoot(),
        FormsModule,
        HttpModule,
        ChartsModule
    ],
    providers: [
        WebsocketService,
        HttpService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
