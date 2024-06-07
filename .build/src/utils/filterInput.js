"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterInput = void 0;
function filterInput(data) {
    if (!data)
        return null;
    var phrase = data.replace(/_/g, ' ');
    return phrase.replace(/20join20/g, '&');
}
exports.filterInput = filterInput;
//# sourceMappingURL=filterInput.js.map