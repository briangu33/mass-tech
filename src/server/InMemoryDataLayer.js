"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataLayer = /** @class */ (function () {
    function InMemoryDataLayer() {
        this.dataStore = {};
    }
    InMemoryDataLayer.prototype.save = function (editToken, data) {
        this.dataStore[editToken] = data;
    };
    InMemoryDataLayer.prototype.get = function (editToken) {
        return this.dataStore[editToken] || {};
    };
    return InMemoryDataLayer;
}());
exports.InMemoryDataLayer = InMemoryDataLayer;
