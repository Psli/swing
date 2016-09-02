'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Direction = exports.Card = exports.Stack = undefined;

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _direction = require('./direction.enum');

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.gajus = global.gajus || {};

global.gajus.Swing = {
    Stack: _stack2.default,
    Card: _card2.default,
    Direction: _direction2.default
};

exports.Stack = _stack2.default;
exports.Card = _card2.default;
exports.Direction = _direction2.default;
//# sourceMappingURL=index.js.map
