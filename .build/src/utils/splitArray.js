"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitArray = void 0;
function splitArray(array, size) {
    var newArray = [];
    for (var i = 0; i < array.length; i += size) {
        var chunk = array.slice(i, i + size);
        newArray.push(chunk);
    }
    return newArray;
}
exports.splitArray = splitArray;
//# sourceMappingURL=splitArray.js.map