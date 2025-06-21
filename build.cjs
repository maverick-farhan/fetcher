var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/yoctocolors-cjs/index.js
var require_yoctocolors_cjs = __commonJS({
  "node_modules/yoctocolors-cjs/index.js"(exports2, module2) {
    var tty = require("node:tty");
    var hasColors = tty?.WriteStream?.prototype?.hasColors?.() ?? false;
    var format = (open, close) => {
      if (!hasColors) {
        return (input) => input;
      }
      const openCode = `\x1B[${open}m`;
      const closeCode = `\x1B[${close}m`;
      return (input) => {
        const string = input + "";
        let index = string.indexOf(closeCode);
        if (index === -1) {
          return openCode + string + closeCode;
        }
        let result = openCode;
        let lastIndex = 0;
        while (index !== -1) {
          result += string.slice(lastIndex, index) + openCode;
          lastIndex = index + closeCode.length;
          index = string.indexOf(closeCode, lastIndex);
        }
        result += string.slice(lastIndex) + closeCode;
        return result;
      };
    };
    var colors2 = {};
    colors2.reset = format(0, 0);
    colors2.bold = format(1, 22);
    colors2.dim = format(2, 22);
    colors2.italic = format(3, 23);
    colors2.underline = format(4, 24);
    colors2.overline = format(53, 55);
    colors2.inverse = format(7, 27);
    colors2.hidden = format(8, 28);
    colors2.strikethrough = format(9, 29);
    colors2.black = format(30, 39);
    colors2.red = format(31, 39);
    colors2.green = format(32, 39);
    colors2.yellow = format(33, 39);
    colors2.blue = format(34, 39);
    colors2.magenta = format(35, 39);
    colors2.cyan = format(36, 39);
    colors2.white = format(37, 39);
    colors2.gray = format(90, 39);
    colors2.bgBlack = format(40, 49);
    colors2.bgRed = format(41, 49);
    colors2.bgGreen = format(42, 49);
    colors2.bgYellow = format(43, 49);
    colors2.bgBlue = format(44, 49);
    colors2.bgMagenta = format(45, 49);
    colors2.bgCyan = format(46, 49);
    colors2.bgWhite = format(47, 49);
    colors2.bgGray = format(100, 49);
    colors2.redBright = format(91, 39);
    colors2.greenBright = format(92, 39);
    colors2.yellowBright = format(93, 39);
    colors2.blueBright = format(94, 39);
    colors2.magentaBright = format(95, 39);
    colors2.cyanBright = format(96, 39);
    colors2.whiteBright = format(97, 39);
    colors2.bgRedBright = format(101, 49);
    colors2.bgGreenBright = format(102, 49);
    colors2.bgYellowBright = format(103, 49);
    colors2.bgBlueBright = format(104, 49);
    colors2.bgMagentaBright = format(105, 49);
    colors2.bgCyanBright = format(106, 49);
    colors2.bgWhiteBright = format(107, 49);
    module2.exports = colors2;
  }
});

// fetcher.js
var os = require("node:os");
var colors = require_yoctocolors_cjs();
var freemem = os.freemem() / 1024 / 1024 / 1024;
var totalmem = os.totalmem() / 1024 / 1024 / 1024;
var androidASCII = `
\u2800\u2800\u2800\u2800\u2880\u28C0\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28C0\u2840\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2819\u28B7\u28E4\u28E4\u28F4\u28F6\u28F6\u28E6\u28E4\u28E4\u287E\u280B\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u28FC\u28FF\u28FF\u28C9\u28F9\u28FF\u28FF\u28FF\u28FF\u28CF\u28C9\u28FF\u28FF\u28E7\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800
\u28E0\u28C4\u2800\u28A0\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u28E4\u2844\u2800\u28E0\u28C4
\u28FF\u28FF\u2847\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28B8\u28FF\u28FF
\u28FF\u28FF\u2847\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28B8\u28FF\u28FF
\u28FF\u28FF\u2847\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28B8\u28FF\u28FF
\u28FF\u28FF\u2847\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28B8\u28FF\u28FF
\u283B\u281F\u2801\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2808\u283B\u281F
\u2800\u2800\u2800\u2800\u2809\u2809\u28FF\u28FF\u28FF\u284F\u2809\u2809\u28B9\u28FF\u28FF\u28FF\u2809\u2809\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u2847\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u2847\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2809\u2809\u2800\u2800\u2800\u2800\u2809\u2809\u2801\u2800\u2800\u2800\u2800\u2800\u2800

`;
var windowsASCII = `
             _.-;;-._
      '-..-'|   ||   |
      '-..-'|_.-;;-._|
      '-..-'|   ||   |
      '-..-'|_.-''-._|
`;
var linuxASCII = `         
       .---.
      /     \\
      \\.@-@./
      /'\\_/'\\
     //  _  \\
    | \\     )|_
   /'\\_'>  <_/ \\
   \\__/'---'\\__/
`;
if (os.platform() === "windows") {
  showSpecs(windowsASCII);
} else if (os.platform() === "linux") {
  showSpecs(linuxASCII);
} else if (os.platform() === "macos") {
  showSpecs(macosASCII);
} else if (os.platform() === "android") {
  showSpecs(androidASCII);
} else {
  console.log(colors.cyan("Hardware not supported"));
}
function showSpecs(platformASCII) {
  const exec = require("child_process").exec;
  console.log(colors.green(`${platformASCII}`));
  console.log(colors.green(` ${os.hostname()}`));
  console.log(colors.green("------------------------------"));
  console.log(colors.green(` Host: ${os.hostname()}`));
  console.log(colors.green(` Kernel: ${os.release()}`));
  console.log(colors.green(` Architecture: ${os.arch()}`));
  console.log(colors.green(` Memory: ${freemem.toPrecision(2)}G / ${totalmem.toPrecision(2)}G`));
  if (os.cpus.length === 0) {
    console.log(colors.green(` CPU: NILL`));
  } else {
    console.log(colors.green(` CPU: ${os.cpus()[0].model}`));
  }
  exec("uname -o", (error, stdout) => {
    console.log(colors.green(` OS: ${stdout}`));
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
  exec("which $SHELL", (error, stdout) => {
    console.log(colors.green(` Shell: ${stdout}`));
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
  exec("apt list --installed | wc -l", (error, stdout) => {
    console.log(colors.green(` Packages: ${stdout}`));
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
  exec("uptime -p", (error, stdout) => {
    console.log(colors.green(` Uptime: ${stdout}`));
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}
