'use strict';
// function(cmd, chunk);
module.exports = {
  '\x07': function(cmd, chunk) { // BELL
    this.push({ type: 'special', cmd: 'BELL'});
  },
  '\x08': function(cmd, chunk) { // BACKSPACE
    this.push({ type: 'special', cmd: 'BACKSPACE'});
  },
  '\x09': function(cmd, chunk) { // TAB
    this.push({ type: 'special', cmd: 'TAB'});
  },
  '\x7f': function(cmd, chunk) { // DELETE
    this.push({ type: 'special', cmd: 'DELETE'});
  },
  '\x88': function(cmd, chunk) { // TABSET
    this.push({ type: 'special', cmd: 'TABSET'});
  },
  '\x0e': function() {
    this.push({ type: 'special', cmd: 'SO'});
  }, // SO
  '\x0f': function() {
    this.push({ type: 'special', cmd: 'SI'});
  }, // SI

  '\x1b': function(cmd, chunk) {
    return chunk[1] !== undefined ?
      this.callHandler('esc', chunk[1], chunk) :
      0;
  }
};