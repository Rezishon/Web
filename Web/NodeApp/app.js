// const sumy = require("./sum");
// console.log(sumy.sum(5, 4));
// const {sum, dis} = require("./sum")
// console.log(dis(5, 4));

//==============================================

// const path = require("path");
// console.log(path.parse(__filename));

//==============================================

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());

//==============================================

// const fileSys = require("fs");
// const files = fileSys.readdirSync("./");
// console.log(files);

// fileSys.readdir('./' , (err, files) => {
//   console.log(err); //error
//   console.log(files); // files found
// });

//==============================================

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('bell', (e)=>{
//   console.log(e)
//   console.log('open the door');
// });
// emitter.emit('bell', {time : Date.now(), count : 2})

//==============================================

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("new connection");

// console.log(typeof(req.url))
//   ( req.url == '/reza') ? res.write("fine I catch it") : res.write(JSON.stringify({app : 'mobile', soft : 'hard'}));
//   res.end();
// });

// server.listen(3000);

//==============================================

// write npm init (-y for fast install)=> package.json
// npm list (for package that are installed)
// npm list --depth-0
// npm i (install all package that are use in a project)
// npm i npm-check-updates -g
// npm -check-updates --upgrade (change json file)
// npm i
// npm un jalali-moment (for delete a package)

//==============================================

// search jalali moment npm =install> npm i jalali-moment => make node modules folder
// const moment = require("jalali-moment");
// console.log(moment(new Date()).locale("fa").format("YYYY/MM/DD"));

//==============================================

// npm i jshint --save-dev (a package that programer use is not the program)
// npm i jshint -g (install in global)

//==============================================

// npm i express
const express = require("express");
const app = express();
// roate, callbackfunction
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, name: "reza" },
    { id: 3, name: "reyhane" },
  ]);
});
app.listen(3000, ()=>{
  console.log('lesening on port 3000')
})
// npm i -g nodemon (restart with no stop)

//==============================================

// const port = process.env.port || 3000;
// process.env.port => terminal : set port = ...
// app.listen(port, () => {
//   console.log(`lesening on port ${port}`);
// }); when we dont want to use one port or use a host api 

// 2:32