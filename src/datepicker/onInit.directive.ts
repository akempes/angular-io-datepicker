import {Directive, Output, EventEmitter, OnInit} from "@angular/core";

@Directive({
    selector: "[on-init]"
})
export class OnInitDirective implements OnInit {
    @Output("on-init") onInit: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        this.onInit.emit(0);
    }
}
