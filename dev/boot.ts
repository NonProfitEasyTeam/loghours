///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {provide} from "angular2/core";
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent,  [ROUTER_PROVIDERS]);

