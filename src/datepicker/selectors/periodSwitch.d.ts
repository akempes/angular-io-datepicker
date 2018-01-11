import { EventEmitter, ChangeDetectorRef } from "@angular/core";
export declare class PeriodSwitch {
    ref: ChangeDetectorRef;
    period: string;
    prev: EventEmitter<any>;
    next: EventEmitter<any>;
    modeChange: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
}
