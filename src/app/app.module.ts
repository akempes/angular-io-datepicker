import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DatePickerModule } from "../datepicker/index";

import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        DatePickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
