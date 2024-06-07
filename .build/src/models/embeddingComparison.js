"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddingComparison = void 0;
function embeddingComparison(reference, data, filter) {
    var newData = data.map(function (item) {
        var val = cosineSimilarity(item.nameData, reference);
        delete item.nameData;
        return __assign({ distance: val }, item);
    });
    var filterData = newData.filter(function (item) { return item.distance > filter; });
    filterData.sort(function (a, b) { return b.distance - a.distance; });
    return filterData;
}
exports.embeddingComparison = embeddingComparison;
function cosineSimilarity(vector1, vector2) {
    if (vector1.legth !== vector2.legth)
        return 0;
    var dotProduct = vector1.reduce(function (acc, val, i) { return acc + (val * vector2[i]); }, 0);
    var norm1 = Math.sqrt(vector1.reduce(function (acc, val) { return acc + (val * val); }, 0));
    var norm2 = Math.sqrt(vector2.reduce(function (acc, val) { return acc + (val * val); }, 0));
    var similarity = dotProduct / (norm1 * norm2);
    return similarity;
}
//# sourceMappingURL=embeddingComparison.js.map