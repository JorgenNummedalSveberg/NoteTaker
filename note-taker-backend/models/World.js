"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
mongoose_1["default"].Schema.Types.String.checkRequired(function (v) { return typeof v === 'string'; });
var World = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true }
});
exports["default"] = mongoose_1["default"].model('World', World);
