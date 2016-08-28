import {Component} from 'angular2/core';
import {SettingsComponent} from './settings/settings.component';
import {TrackhoursComponent} from './trackhours/trackhours.component';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
@Component({
    selector: 'log-hours-app',
    templateUrl: 'templates/main-template.html',
    directives:[SettingsComponent, TrackhoursComponent, ROUTER_DIRECTIVES] 
})

@RouteConfig([
    { path: '/', name:'Home',  component:TrackhoursComponent , useAsDefault:true },
    { path: '/settings', name:'Settings',  component:SettingsComponent  }
])
export class AppComponent { 

}