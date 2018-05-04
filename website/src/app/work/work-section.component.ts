import { Component, Input, OnInit } from "@angular/core";

import { DataService } from "./../data.service";

@Component({
    selector: "work-section",
    templateUrl: "./work-section.component.html",
    styleUrls: [
        "./work-section.component.css"
    ]
})
export class WorkSection implements OnInit {
    companies: Company[];
    ngOnInit(): void {
        this.data.get<Company[]>("work")
            .then(response => this.companies = response);
    }

    constructor(private data: DataService) {
        
    }

}

@Component({
    selector: "work-company",
    templateUrl: "./work-company.html",
    styleUrls: [
        "./work-section.component.css"
    ]
})
export class WorkCompany {
    @Input()company: Company;

    toggle(company: Company) {
        company.isExpanded = !company.isExpanded;
    }
}

@Component({
    selector: "work-task",
    templateUrl: "./work-task.html",
    styleUrls: [
        "./work-section.component.css"
    ]
})
export class WorkTask {
    @Input()task: Task;
}

@Component({
    selector: "work-tech",
    templateUrl: "./work-tech.html",
    styleUrls: [
        "./work-section.component.css"
    ]
})
export class WorkTech {
    @Input()tech: Tech;
}

class Company{
    name: string;
    link: string;
    text: string;
    tasks: Task[];
    isExpanded: boolean;
}

class Task {
    text: string;
    techs: Tech[];
}

class Tech {
    name: string;
    link: string;
}

export const WorkComponents = [
    WorkSection,
    WorkCompany,
    WorkTask,
    WorkTech
]