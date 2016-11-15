import { Component } from "@angular/core";
import { Moment } from "moment";

import { decade } from "../dateUtils";

import { AbstractSelector } from "./abstractSelector";


@Component({
    selector: "year-selector",
    styleUrls: ["../datepicker.css"],
    template: `
    <div class="date-set">
        <period-switch [period]="formatDecade(date)"
                       (prev)="prev()"
                       (next)="next()"
                       (modeChange)="modeChanged.emit($event)">
        </period-switch>
        <ul class="date-set__dates">
            <li *ngFor="let year of years()"
                [ngClass]="
                {
                     'date-set__date': true, 
                     'selected': isSelected(year) 
                }"
                (mousedown)="dateSelected.emit(year); $event.preventDefault(); $event.stopPropagation();">
                {{ year.format("YYYY") }}
            </li>
        </ul>
    </div>
    `
})
export class YearSelector extends AbstractSelector {
    prev(): void {
        this.value = this.value.subtract(10, "year");
    }

    next(): void {
        this.value = this.value.add(10, "year");
    }

    protected years(): Moment[] {
        const [start] = decade(this.value);

        const result: Moment[] = [];

        for (let year = 0; year < 10; year++) {
            result.push(start.clone().add(year, "year"));
        }

        return result;
    }
}
