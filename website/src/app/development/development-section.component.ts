import { Component, OnInit, Input } from "@angular/core";
import { trigger, style, animate, transition } from '@angular/animations';

import { DataService } from "./../data.service";

@Component({
    selector: "development-section",
    templateUrl: "./development-section.component.html",
    styleUrls: [
        "./development-section.component.css"
    ]
})
class DevelopmentSection implements OnInit {
    developmentData: DevelopmentData;
    ngOnInit(): void {
        this.data.get<DevelopmentData>("development")
            .then(response => this.developmentData = response);
    }

    constructor(private data: DataService) {
    }
}

@Component({
    selector: "development-category",
    templateUrl: "./development-category.html",
    styleUrls: [
        "./development-section.component.css"
    ],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate('500ms', style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ opacity: 1 }),
                    animate('500ms', style({ opacity: 0 }))
                ])
            ]
        )
    ]
})
class DevelopmentCategory {
    @Input() category: Category;
    @Input() isSubCategory: boolean;

    toggle(category: Category) {
        category.isExpanded = !category.isExpanded;
    }
}

@Component({
    selector: "development-item",
    templateUrl: "./development-item.html",
    styleUrls: [
        "./development-section.component.css"
    ]
})
class DevelopmentItem {
    @Input() item: Item;
}

class DevelopmentData {
    categories: Category[]
}

abstract class NamedItem {
    name: string;
}

class Category extends NamedItem {
    subCategories: Category[];
    items: Item[];
    isExpanded: boolean;
}

class Item extends NamedItem {
    link: string;
    description: string;
    subItems: Item[];
}

export const DevelopmentComponents = [
    DevelopmentSection,
    DevelopmentCategory,
    DevelopmentItem
]