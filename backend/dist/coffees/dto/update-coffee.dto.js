"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoffeeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coffee_dto_1 = require("./create-coffee.dto");
class UpdateCoffeeDto extends mapped_types_1.PartialType(create_coffee_dto_1.CreateCoffeeDto) {
}
exports.UpdateCoffeeDto = UpdateCoffeeDto;
//# sourceMappingURL=update-coffee.dto.js.map