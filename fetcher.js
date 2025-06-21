const os = require("node:os");
const colors = require("yoctocolors-cjs");
const freemem = os.freemem()/1024/1024/1024;
const totalmem = os.totalmem()/1024/1024/1024;

const androidASCII = `
⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢷⣤⣤⣴⣶⣶⣦⣤⣤⡾⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣉⣹⣿⣿⣿⣿⣏⣉⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⣠⣄⠀⢠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⡄⠀⣠⣄
⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿
⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿
⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿
⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿
⠻⠟⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠈⠻⠟
⠀⠀⠀⠀⠉⠉⣿⣿⣿⡏⠉⠉⢹⣿⣿⣿⠉⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀

`;

const appleASCII = `
                        .8 
                      .888
                    .8888'
                   .8888'
                   888'
                   8'
      .88888888888. .88888888888.
   .8888888888888888888888888888888.
 .8888888888888888888888888888888888.
.&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.
 00000000000000000000000000000000000'
  000000000000000000000000000000000'
   0000000000000000000000000000000'
     ###########################'
       #######################'
         #########''########
           """"""'  """""
`;
const windowsASCII = 
  `
             _.-;;-._
      '-..-'|   ||   |
      '-..-'|_.-;;-._|
      '-..-'|   ||   |
      '-..-'|_.-''-._|
`;

const linuxASCII = 
`         
       .---.
      /     \\
      \\.@-@./
      /'\\_/'\\
     //  _  \\
    | \\     )|_
   /'\\_'>  <_/ \\
   \\__/'---'\\__/
`;
if(os.platform()==='windows'){
  showSpecs(windowsASCII);
}
else if(os.platform()==='linux'){
  showSpecs(linuxASCII);
}
else if(os.platform()==='macos'){
  showSpecs(macosASCII);
}
else if(os.platform()==='android'){
  showSpecs(androidASCII);
}
else{
  console.log(colors.cyan("Hardware not supported"));
}

//Show Specs Details of Hardware
function showSpecs(platformASCII){
const exec = require('child_process').exec;
  console.log(colors.green(`${platformASCII}`));
  console.log(colors.green(` ${os.hostname()}`))
  console.log(colors.green('------------------------------'));
  console.log(colors.green(` Host: ${os.hostname()}`))
  console.log(colors.green(` Kernel: ${os.release()}`))
  console.log(colors.green(` Architecture: ${os.arch()}`))
  console.log(colors.green(` Memory: ${freemem.toPrecision(2)}G / ${totalmem.toPrecision(2)}G`))
if(os.cpus.length === 0){
  console.log(colors.green(` CPU: NILL`))
}
else{
  console.log(colors.green(` CPU: ${os.cpus()[0].model}`))
}

exec('uname -o',(error,stdout)=>{
        console.log(colors.green(` OS: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

exec('which $SHELL',(error,stdout)=>{
        console.log(colors.green(` Shell: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

exec('apt list --installed | wc -l',(error,stdout)=>{
        console.log(colors.green(` Packages: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
exec('uptime -p',(error,stdout)=>{
        console.log(colors.green(` Uptime: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}
