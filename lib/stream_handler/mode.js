'use strict';

var emit_func = function(char) {
  return function(cmd, args) {
    var code = 'MODE'; this.push({ code: code, cmd: cmd, args: args });
  };
};

module.exports = {};

for (var i=0;i<2048;i++) {
  module.exports[i] = emit_func(i);
  module.exports['?'+i] = emit_func(i);
}
