import {Injectable} from "angular2/core";
import {PROJECTS} from "./project";

@Injectable()

export class ProjectService {
    getProject(){
        return Promise.resolve(PROJECTS);
    }
}