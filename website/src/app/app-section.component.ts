import { Component, Input } from '@angular/core';

@Component({
    selector: "app-section",
    styleUrls: ["./app-section.component.css"],
    template: "<h1>{{name}}</h1> <ng-content></ng-content>"
})
export class AppSection {
    @Input()name;
}
