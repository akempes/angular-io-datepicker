import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Moment } from "moment";
import { AbstractSelector } from "./abstractSelector";
export declare class DecadeSelector extends AbstractSelector {
    ref: ChangeDetectorRef;
    date: Moment;
    dateChange: EventEmitter<Moment>;
    dateSelected: EventEmitter<Moment>;
    modeChanged: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
    prev(): void;
    next(): void;
    formatCentury(): string;
    decades(): Moment[];
    isDecadeSelected(value: Moment): boolean;
}
