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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Radium = require("radium");
var ErrorPageComponent = /** @class */ (function (_super) {
    __extends(ErrorPageComponent, _super);
    function ErrorPageComponent(props) {
        return _super.call(this) || this;
    }
    ErrorPageComponent_1 = ErrorPageComponent;
    ErrorPageComponent.prototype.render = function () {
        return (<div style={[
            ErrorPageComponent_1.styles.base
        ]}>
                code: {this.props.error.code}
                <br />
                message: {this.props.error.message}
                <br />
                {this.props.isProd ? "" : "debug mode"}
                <br />
            </div>);
    };
    ErrorPageComponent.styles = {
        base: {
            width: "100%"
        }
    };
    ErrorPageComponent = ErrorPageComponent_1 = __decorate([
        Radium
    ], ErrorPageComponent);
    return ErrorPageComponent;
    var ErrorPageComponent_1;
}(React.Component));
exports.ErrorPageComponent = ErrorPageComponent;
