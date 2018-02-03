"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = require("sqlite3");
var path = require("path");
var Env_1 = require("./Env");
var fs = require("fs");
var util = require("util");
var exec = require("child_process").exec;
var SQLiteDataLayer = /** @class */ (function () {
    function SQLiteDataLayer() {
        this.makeDirIfNotExists(path.join(Env_1.rootPath, "data"));
        this.makeDirIfNotExists(path.join(Env_1.rootPath, "data", "db"));
        sqlite3.verbose();
        var dbPath = path.join(Env_1.rootPath, "data", "db", "prod_db");
        this.db = new sqlite3.Database(dbPath);
    }
    SQLiteDataLayer.prototype.makeDirIfNotExists = function (path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    };
    SQLiteDataLayer.prototype.execRunWithPromise = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.run(query, params, function (err, result) {
                return (err ? reject(err) : resolve(result));
            });
        });
    };
    SQLiteDataLayer.prototype.execGetWithPromise = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.get(query, params, function (err, result) {
                return (err ? reject(err) : resolve(result));
            });
        });
    };
    SQLiteDataLayer.prototype.execAllWithPromise = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.all(query, params, function (err, result) {
                return (err ? reject(err) : resolve(result));
            });
        });
    };
    SQLiteDataLayer.prototype.execCommandWithPromise = function (command) {
        return new Promise(function (resolve, reject) {
            exec(command, { maxBuffer: 1024 * 1024 }, function (err, stdout, stderr) {
                if (err) {
                    return reject(err);
                }
                return resolve(stdout);
            });
        });
    };
    SQLiteDataLayer.prototype.createTables = function () {
        var _this = this;
        return this.execRunWithPromise("CREATE TABLE IF NOT EXISTS compositions " +
            "(edit_token VARCHAR(100), " +
            "view_token VARCHAR(100), " +
            "name VARCHAR(100), " +
            "youtube_id VARCHAR(100), " +
            "recording_youtube_start DOUBLE, " +
            "recording_youtube_end DOUBLE, " +
            "start_recording_time BIGINT, " +
            "last_edited BIGINT, " +
            "view_count INT, " +
            "pitch_shift INT, " +
            "has_recorded BIT, " +
            "auto_recorded BIT, " +
            "video_duration DOUBLE, " +
            "PRIMARY KEY (edit_token), " +
            "UNIQUE (view_token)) ")
            .then(function () {
            return _this.execRunWithPromise("CREATE TABLE IF NOT EXISTS compositions_notes_map " +
                "(composition_edit_token INT, " +
                "note_id INT, " +
                "start INT, " +
                "end INT)");
        })
            .then(function () {
        });
    };
    SQLiteDataLayer.instancePromise = null;
    return SQLiteDataLayer;
}());
exports.SQLiteDataLayer = SQLiteDataLayer;
var TimeInterval;
(function (TimeInterval) {
    TimeInterval["Day"] = "day";
    TimeInterval["Week"] = "week";
    TimeInterval["Month"] = "month";
    TimeInterval["AllTime"] = "all_time";
})(TimeInterval = exports.TimeInterval || (exports.TimeInterval = {}));
function timeIntervalToMillis(timeInterval) {
    switch (timeInterval) {
        case "day": {
            return 1000 * 60 * 60 * 24;
        }
        case "week": {
            return 1000 * 60 * 60 * 24 * 7;
        }
        case "month": {
            return 1000 * 60 * 60 * 24 * 31;
        }
        case "all_time": {
            return 1000 * 60 * 60 * 24 * 365 * 30;
        }
        default: {
            return 0;
        }
    }
}
exports.timeIntervalToMillis = timeIntervalToMillis;
