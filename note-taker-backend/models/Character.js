"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
mongoose_1["default"].Schema.Types.String.checkRequired(function (v) { return typeof v === 'string'; });
var Character = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    aliases: { type: [String], required: true, unique: false },
    description: { type: String, required: true, unique: false },
    specialTraits: { type: [String], required: true, unique: false },
    thoughtsSurrounding: { type: [String], required: true, unique: false },
    socialStatus: { type: String, required: true, unique: false },
    groups: { type: [String], required: true, unique: false },
    wealth: { type: String, required: true, unique: false },
    negativeStanding: { type: [String], required: true, unique: false },
    positiveStanding: { type: [String], required: true, unique: false },
    campaigns: { type: [String], required: true, unique: false },
    items: { type: [String], required: true, unique: false },
    questsGiven: { type: [String], required: true, unique: false },
    questsParticipated: { type: [String], required: true, unique: false } // Quests they have themselves taken apart in
});
exports["default"] = mongoose_1["default"].model('Character', Character);
