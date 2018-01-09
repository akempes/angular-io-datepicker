"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OnInitDirective = (function () {
    function OnInitDirective() {
        this.onInit = new core_1.EventEmitter();
    }
    OnInitDirective.prototype.ngOnInit = function () {
        this.onInit.emit(0);
    };
    return OnInitDirective;
}());
__decorate([
    core_1.Output("on-init"),
    __metadata("design:type", core_1.EventEmitter)
], OnInitDirective.prototype, "onInit", void 0);
OnInitDirective = __decorate([
    core_1.Directive({
        selector: "[on-init]"
    })
], OnInitDirective);
exports.OnInitDirective = OnInitDirective;
//# sourceMappingURL=onInit.directive.js.map