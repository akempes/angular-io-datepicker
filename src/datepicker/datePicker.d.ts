import { AbstractControl, ControlValueAccessor } from "@angular/forms";
import { ElementRef, OnInit } from "@angular/core";
import { Moment } from "moment";
import { MomentParseFunction, OnChangeHandler, OnTouchedHandler } from "./common";
import { DatePickerPanel } from "./datePickerPanel";
export declare type ParserFunction = (value: any, parseFn: MomentParseFunction) => Moment;
export declare class DatePicker implements ControlValueAccessor, OnInit {
    private _value;
    private parseValue;
    datePickerContainer: ElementRef;
    datePickerPanel: DatePickerPanel;
    mode: "date" | "datetime" | "time";
    displayDateMode: "day" | "month" | "year";
    showClearButton: boolean;
    format: string;
    isMeridiem: boolean;
    disabled: boolean;
    align: any;
    closeBySelection: boolean;
    inputClass: string;
    onChange: OnChangeHandler;
    onTouched: OnTouchedHandler;
    inputText: string;
    popupOpen: boolean;
    constructor();
    ngOnInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: OnChangeHandler): void;
    registerOnTouched(fn: OnTouchedHandler): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    /** Raises handers registered by ControlValueAccessor.registerOnChange method with converted value. */
    raiseOnChange(value: string): void;
    togglePopup(): void;
    openPopup(): void;
    isOpen(datePickerPanel: DatePickerPanel): void;
    closePopup(): void;
    clear(): void;
    getCSSClasses(): string;
    readonly isUsingMeridiem: boolean;
    /**
     * Formats input value based on current input type.
     * Value converted to local before formatting.
     */
    private formatValue(value);
    /** Format based on date picker current type. */
    private readonly currentFormat;
    private updateControlText(formattedValue);
    private convertValue(value);
}
