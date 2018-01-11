import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Moment } from "moment";
import { AbstractSelector } from "./abstractSelector";
export declare class MinuteSelector extends AbstractSelector {
    ref: ChangeDetectorRef;
    date: Moment;
    dateChange: EventEmitter<Moment>;
    dateSelected: EventEmitter<Moment>;
    modeChanged: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
    minutes(): Moment[];
}
