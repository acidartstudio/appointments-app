// Some plugins like isotope throw errors while compiling in webpack. So we;ll load it in the <head> along with the other modules that deppend on it.
/* jQuery must be declared globally */
//global.$ = global.jQuery = require('./global/core/jquery.js');
require('./global/core/jquery_ui.js');
require('./global/custom.js');