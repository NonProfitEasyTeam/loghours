import {Injectable} from "angular2/core";
import {PROJECTS, Project} from "./project";

@Injectable()

export class ProjectService {
    getProject() : Promise<Project[]>{
        return Promise.resolve(PROJECTS);
    }
}