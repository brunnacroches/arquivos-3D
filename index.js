const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));






// import http from 'http';
// var port = process.env.PORT || 8000;
// const CORS = {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
// };
// const server = http.createServer(async(req,res)=>{
//     if(req.url === '/result4/'){

//         res.writeHead(200, {
//             'Content-Type':'application/json',
//             ...CORS,
//         })
//         let data = '';
//         await req.on('data', function (chunk){
//             data += chunk;
//         }).on('end', () =>{
//       })
//       res.write(JSON.stringify({
//           "message":"itmo308555",
//           "x-result":"baovn",
//           "x-body":"abc"
//       }
//       ))
//     }
//     res.end()
// });
// server.listen(port,() =>{
//     console.log('Server is running')});






// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;

// express()
//   .use(express.static(path.join(__dirname,'../client')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('dist/client/index.html'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

 