import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Moment } from "moment";
export declare class TimeComponentSelector {
    ref: ChangeDetectorRef;
    date: Moment;
    isMeridiem: boolean;
    dateChange: EventEmitter<Moment>;
    selectHour: EventEmitter<any>;
    selectMinute: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
    plusHour(): void;
    minusHour(): void;
    plusMinute(): void;
    minusMinute(): void;
    togglePmAm(): void;
}
