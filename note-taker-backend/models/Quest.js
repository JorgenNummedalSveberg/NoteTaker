"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
mongoose_1["default"].Schema.Types.String.checkRequired(function (v) { return typeof v === 'string'; });
var Quest = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    giver: { type: String, required: true, unique: false },
    takers: { type: [String], required: true, unique: false },
    goldReward: { type: String, required: true, unique: false },
    itemReward: { type: [String], required: true, unique: false },
    benefits: { type: [String], required: true, unique: false },
    downsides: { type: [String], required: true, unique: false },
    description: { type: String, required: true, unique: false },
    objective: { type: String, required: true, unique: false },
    places: { type: [String], required: true, unique: false },
    campaigns: { type: [String], required: true, unique: false } // Campaign the quest happened in
});
exports["default"] = mongoose_1["default"].model('Quest', Quest);
