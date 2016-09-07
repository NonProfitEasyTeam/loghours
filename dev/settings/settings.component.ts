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
            <a [routerLink]="['Myaccount']">My Accounts</a>
            <a [routerLink]="['Myproject']">My Projects</a>
        </nav>
        <div >
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES] 
})
@RouteConfig([
    { path: 'myproject', name:"Myproject", component: ProjectComponent, useAsDefault:true  },
    { path: 'myaccount', name:"Myaccount", component:MyAccount}
])
export class SettingsComponent {

}
