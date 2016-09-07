import {Component} from 'angular2/core';
import {SettingsComponent} from './settings/settings.component';
import {TrackhoursComponent} from './trackhours/trackhours.component';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from "angular2/router";

@Component({
    selector: 'log-hours-app',
    templateUrl: 'templates/main-template.html',
    directives:[SettingsComponent, TrackhoursComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
    { path: '/Home', name:'Home',  component:TrackhoursComponent , useAsDefault:true },
    { path: '/settings/...', name:'Settings',  component:SettingsComponent  },
    { path: '/**', redirectTo: ['Home'] }
])


export class AppComponent { 

}