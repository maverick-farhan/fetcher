# Fetcher
## system information tool in nodejs
```js

const os = require("node:os");
const colors = require("yoctocolors-cjs");
const freemem = os.freemem()/1024/1024/1024;
const totalmem = os.totalmem()/1024/1024/1024;

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
  console.log(colors.yellow("Fetcher is Fetching..."));
  setTimeout(showSpecs,1000);
}
else if(os.platform()==='linux'){
  console.log(colors.yellow("Fetcher is Fetching..."));
  setTimeout(showSpecs,1000);
}
else if(os.platform()==='macos'){
  console.log(colors.yellow("Fetcher is Fetching..."));
  setTimeout(showSpecs,1000);
}
else{
  console.log("Hardware not supported")
}

//Show Specs Details of Hardware
function showSpecs(){
const exec = require('child_process').exec;
  console.log(colors.red(`${linuxASCII}`));
  console.log(colors.red(` ${os.hostname()}`))
  console.log(colors.red('------------------------------'));
  console.log(colors.red(` Host: ${os.hostname()}`))
  console.log(colors.red(` Kernel: ${os.release()}`))
  console.log(colors.red(` Architecture: ${os.arch()}`))
  console.log(colors.red(` Memory: ${freemem.toPrecision(2)}G / ${totalmem.toPrecision(2)}G`))
  console.log(colors.red(` CPU: ${os.cpus()[0].model}`))
exec('uname -o',(error,stdout)=>{
        console.log(colors.red(` OS: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

exec('which $SHELL',(error,stdout)=>{
        console.log(colors.red(` Shell: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

exec('apt list --installed | wc -l',(error,stdout)=>{
        console.log(colors.red(` Packages: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
exec('uptime -p',(error,stdout)=>{
        console.log(colors.red(` Uptime: ${stdout}`))
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}
```
![Sample Image](snippet.png "Fetcher in Action")

