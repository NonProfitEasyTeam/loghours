import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ProjectComponent} from './projects.component';
import {MyAccount} from './account.component';
import {RouteConfig} from "angular2/router";
@Component({
    selector: 'settings',
    template: `
        <h1>Settings</h1>
        <nav>
            <a [routerLink]="['./settings','myproject']">My Projects</a>
            <a [routerLink]="['./settings','myaccount']">My Accounts</a>
        </nav>
        <div style="border: 1px solid red;">
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES] 
})
@RouteConfig([
    { path: 'myproject', as:'Settings',  component:ProjectComponent, useAsDefault:true },
    { path: 'myaccount', as:'Settings',  component:MyAccount }
])
export class SettingsComponent {

}
