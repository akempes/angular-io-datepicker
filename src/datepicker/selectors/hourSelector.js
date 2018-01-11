"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var abstractSelector_1 = require("./abstractSelector");
var HourSelector = (function (_super) {
    __extends(HourSelector, _super);
    function HourSelector(ref) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.isMeridiem = true;
        _this.dateChange.subscribe(function (newDate) {
            _this.ref.markForCheck();
        });
        return _this;
    }
    HourSelector.prototype.hours = function () {
        var startDate = this.value;
        var result = [];
        startDate.hour((startDate.hour() < 12 || this.isMeridiem === false) ? 0 : 12);
        for (var i = (this.isMeridiem === true ? 1 : 0); i < (this.isMeridiem === true ? 13 : 25); i++) {
            result.push(startDate.clone().add(i, "hour"));
        }
        return result;
    };
    HourSelector.prototype.isCurrentHour = function (date) {
        return date && this.value && this.value.hour() === date.hour();
    };
    return HourSelector;
}(abstractSelector_1.AbstractSelector));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HourSelector.prototype, "date", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HourSelector.prototype, "isMeridiem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HourSelector.prototype, "dateChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HourSelector.prototype, "dateSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HourSelector.prototype, "modeChanged", void 0);
HourSelector = __decorate([
    core_1.Component({
        selector: "hour-selector",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styles: [
            ".date-set{line-height:2em;text-align:center;vertical-align:middle}.date-set.hidden{display:none}.date-set__dates{display:flex;flex-direction:row;margin:0;padding:0;list-style-type:none;flex-wrap:wrap;justify-content:space-between;align-items:stretch}.date-set__date{cursor:pointer;flex-grow:1;flex-shrink:0;}.date-set__date.selected{background:#eee}"
        ],
        template: "\n        <div class=\"date-set\">\n            <ul class=\"date-set__dates\">\n                <li *ngFor=\"let hour of hours()\"\n                    [ngClass]=\"\n                {\n                     'date-set__date': true,\n                     'selected': isCurrentHour(hour)\n                }\"\n                    [style.flexBasis]=\"isMeridiem === true ? '33%' : '25%'\"\n                    (mousedown)=\"isCurrentHour(hour) ? hour : dateChange.emit(hour); $event.preventDefault(); $event.stopPropagation();\">\n                    {{ hour.format(isMeridiem === true ? 'hh' : 'HH') }}\n                </li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], HourSelector);
exports.HourSelector = HourSelector;
//# sourceMappingURL=hourSelector.js.map