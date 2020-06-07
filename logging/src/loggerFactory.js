/*******************************************************************************
* JavaScript console logging extension - a/A May 2020 - G. Burgess
* Cleaned up, debugged, colors added - 2020-06-07
*******************************************************************************/

let colors = false;

const loggerFactory = () => {

  const makeTag = () =>{
    // get the stack information
    const loc = (new Error).stack.split('\n')[3].replace(/.*\//,'').split(':');

    // get a timestamp
    const date = new Date();
    const hour = date.getHours(), min = date.getMinutes(),
          sec = date.getSeconds(), ms = date.getMilliseconds();

    // pad digits with <len> zeros
    const zpad = (numstr, len) => {
      while (`${numstr}`.length < len) {
        numstr = `0${numstr}`;
      }
      return numstr;
    }

    // format the timestamp
    const ts = `${zpad(hour,2)}:${zpad(min,2)}:${zpad(sec,2)}.${zpad(ms,3)}`;

    // create the
    return {
      ts: `${ts}`,
      fp: `['${loc[0]}', line ${loc[1]}]`};
  }

  return function(...args){
    const tag = makeTag();
    if (colors)
      // the colors package is used here to color strings written to the console
      console.log(tag.ts.yellow, tag.fp.magenta, ...args);
    else
      console.log(tag.ts, tag.fp, ...args);
  }
}

logger = loggerFactory();
try {
  // the colors package is used to color strings written to the console
  colors = require('colors');
  logger('(colors package loaded)'.green);
} catch {
  logger('(colors package not loaded)');
}

try {
  module.exports = loggerFactory;
} catch {
  module.exports = null;
}
