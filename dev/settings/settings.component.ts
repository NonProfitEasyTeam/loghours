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
            <a [routerLink]="['Myproject']">My Projects</a>
            <a [routerLink]="['Myaccount']">My Accounts</a>
        </nav>
        <div style="border: 1px solid red;">
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES] 
})
@RouteConfig([
    { path: 'myaccount', name:"Myproject", component:MyAccount , useAsDefault:true  },
    { path: 'myproject', name:"Myaccount", component:ProjectComponent}
])
export class SettingsComponent {

}
