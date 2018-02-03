"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var SQLiteDataLayer_1 = require("./SQLiteDataLayer");
var ReactPageRenderMiddleware_1 = require("./ReactPageRenderMiddleware");
exports.ApiController = express.Router();
var fs = require("fs");
// const dataStore = new InMemoryDataLayer();
function returnJson(res, promise) {
    promise
        .then(function (data) { return res.json(data); })
        .catch(function (err) {
        res.status(500);
        res.json(err);
        console.log(err);
    });
}
exports.ApiController.get("/", function (req, res) {
    res.render("index", {
        pageName: ReactPageRenderMiddleware_1.ReactPage.Landing
    });
});
function cleanDB() {
    return SQLiteDataLayer_1.SQLiteDataLayer
        .getInstance()
        .then(function (dataLayer) {
        return dataLayer.cleanUnrecordedCompositions();
    })
        .catch(function (err) {
        return Promise.reject(err);
    });
}
exports.cleanDB = cleanDB;
