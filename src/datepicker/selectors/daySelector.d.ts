import { EventEmitter, OnInit } from "@angular/core";
import { Moment } from "moment";
import { AbstractSelector } from "./abstractSelector";
export declare class DaySelector extends AbstractSelector implements OnInit {
    date: Moment;
    dateChange: EventEmitter<Moment>;
    dateSelected: EventEmitter<Moment>;
    modeChanged: EventEmitter<any>;
    daysOfWeek: string[];
    calendar: Moment[];
    ngOnInit(): void;
    prev(): void;
    next(): void;
    isCurrentMonth(date: Moment): boolean;
}
