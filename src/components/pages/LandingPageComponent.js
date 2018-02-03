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
        let cells = [["1", "two", "three"], ["four", "5", "six"], ["seven", "eight", "9"]];
        let rows = cells.map((row, rowIndex) => {
            let cellsList = row.map((cell, colIndex) => {
                return (React.createElement("div", { key: colIndex, style: {} },
                    React.createElement("p", null, cell)));
            });
            return (React.createElement("div", { key: rowIndex, style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                } }, cellsList));
        });
        return (React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            } }, rows));
    }
};
LandingPageComponent.styles = {
    base: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        fontSize: "4em",
    },
    subtitle: {
        fontSize: "1.5em",
    },
    composeButton: {
        padding: "10px 5px 10px 5px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        cursor: "pointer",
        transition: "200ms",
        fontSize: "1.2em",
        opacity: 0.8,
        marginRight: "20px",
        ":hover": {
            fontWeight: "bold"
        },
    },
    advancedEditorButton: {
        padding: "10px 5px 10px 5px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2em",
        opacity: 0.8,
        ":hover": {
            fontWeight: "bold"
        },
    },
    stanfordButton: {
        padding: "10px 5px 10px 5px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        cursor: "auto",
        fontSize: "1.2em",
        opacity: 0.8,
        ":hover": {
            fontWeight: "bold"
        },
    },
};
LandingPageComponent = __decorate([
    Radium
], LandingPageComponent);
exports.LandingPageComponent = LandingPageComponent;
