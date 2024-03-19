"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Me = void 0;
const common_1 = require("@nestjs/common");
exports.Me = (0, common_1.createParamDecorator)(async (data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=me.guard.js.map