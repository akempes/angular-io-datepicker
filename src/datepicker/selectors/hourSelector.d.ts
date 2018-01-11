import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Moment } from "moment";
import { AbstractSelector } from "./abstractSelector";
export declare class HourSelector extends AbstractSelector {
    ref: ChangeDetectorRef;
    date: Moment;
    isMeridiem: boolean;
    dateChange: EventEmitter<Moment>;
    dateSelected: EventEmitter<Moment>;
    modeChanged: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
    hours(): Moment[];
    isCurrentHour(date: Moment): boolean;
}
