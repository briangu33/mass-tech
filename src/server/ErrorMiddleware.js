"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactPageRenderMiddleware_1 = require("./ReactPageRenderMiddleware");
var Env_1 = require("./Env");
function ErrorMiddleware(err, req, res, next) {
    var code = err.code || 500;
    var message = Env_1.IS_PROD ? "looks like there was an error" : err.message || err;
    console.log("error handler invoked");
    console.log(err);
    res.status(code);
    res.render("index", {
        pageName: ReactPageRenderMiddleware_1.ReactPage.Error,
        isProd: Env_1.IS_PROD,
        error: {
            code: code,
            message: message
        }
    });
}
exports.ErrorMiddleware = ErrorMiddleware;
