import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DaySelector, DecadeSelector, HourSelector, MinuteSelector, MonthSelector, PeriodSwitch, TimeComponentScroller, TimeComponentSelector, YearSelector } from "./selectors/index";
import { DatePicker, DatePickerPanel, DateSelectorComponent, TimeSelector, OnInitDirective } from "./index";


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PeriodSwitch,
        DaySelector,
        DecadeSelector,
        HourSelector,
        MinuteSelector,
        MonthSelector,
        TimeComponentSelector,
        TimeComponentScroller,
        YearSelector,
        DatePickerPanel,
        DateSelectorComponent,
        DatePicker,
        TimeSelector,
        TimeComponentScroller,
        OnInitDirective
    ],
    exports: [
        DatePicker
    ],
    entryComponents: [
        DatePickerPanel
    ]
})
export class DatePickerModule {}
