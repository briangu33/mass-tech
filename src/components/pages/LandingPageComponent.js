"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Radium = require("radium");
let LandingPageComponent = class LandingPageComponent extends React.Component {
    render() {
        let cells = Array(100).fill(Array(100).fill("sample value"));
        let rows = cells.map((row, rowIndex) => {
            let cellsList = row.map((cell, colIndex) => {
                return (React.createElement("div", { key: colIndex, style: {
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        minWidth: "100px",
                        height: "20px"
                    } },
                    React.createElement("p", null, cell)));
            });
            return (React.createElement("div", { key: rowIndex, style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                } }, cellsList));
        });
        return (React.createElement("div", null,
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start"
                } }, rows),
            React.createElement("div", { style: {
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    height: "25px",
                    width: "100%",
                    backgroundColor: "#888888",
                } })));
    }
};
LandingPageComponent.styles = {};
LandingPageComponent = __decorate([
    Radium
], LandingPageComponent);
exports.LandingPageComponent = LandingPageComponent;
