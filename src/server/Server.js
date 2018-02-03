"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var ApiController_1 = require("./ApiController");
var ErrorMiddleware_1 = require("./ErrorMiddleware");
var Env_1 = require("./Env");
var exphbs = require("express-handlebars");
exports.htmlDir = path.join(Env_1.rootPath, "html");
exports.jsDir = path.join(Env_1.rootPath, "dist", "bundle");
exports.resDir = path.join(Env_1.rootPath, "res");
exports.cssDir = path.join(Env_1.rootPath, "css");
var app = express();
var schedule = require('node-schedule');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan("dev"));
app.set('view engine', 'hbs');
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(Env_1.rootPath, "views", "layouts"),
    helpers: {
        str: function (context) {
            return JSON.stringify(context);
        }
    }
}));
app.use(ApiController_1.ApiController);
app.use("/js", express.static(exports.jsDir));
app.use("/res", express.static(exports.resDir));
app.use("/css", express.static(exports.cssDir));
app.use(ErrorMiddleware_1.ErrorMiddleware);
app.listen(Env_1.PORT, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("listening on port " + Env_1.PORT);
        return [2 /*return*/];
    });
}); });
// schedule jobs
// clean every day at midnight
schedule.scheduleJob('* 0 * * *', function () {
    console.log("Attempting to clean DB.");
    ApiController_1.cleanDB()
        .then(function () { return console.log("Finished executing clean job."); })
        .catch(function (err) {
        console.log("Could not execute clean job for reason: ");
        console.log(err);
    });
});
