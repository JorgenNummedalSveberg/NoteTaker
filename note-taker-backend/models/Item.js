"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
mongoose_1["default"].Schema.Types.String.checkRequired(function (v) { return typeof v === 'string'; });
var Item = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: false },
    worlds: { type: [String], required: true, unique: false },
    campaigns: { type: [String], required: true, unique: false } // Campaigns the item has appeared in
});
exports["default"] = mongoose_1["default"].model('Item', Item);
