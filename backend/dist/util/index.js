"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
function isEmpty(obj) {
    return (obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype);
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=index.js.map