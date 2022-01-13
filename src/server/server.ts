import http from 'http';
var port = process.env.PORT || 8000;
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
};
const server = http.createServer(async(req,res)=>{
    if(req.url === '/result4/'){

        res.writeHead(200, {
            'Content-Type':'application/json',
            ...CORS,
        })
        let data = '';
        await req.on('data', function (chunk){
            data += chunk;
        }).on('end', () =>{
      })
      res.write(JSON.stringify({
          "message":"itmo308555",
          "x-result":"baovn",
          "x-body":"abc"
      }
      ))
    }
    res.end()
});
server.listen(port,() =>{
    console.log('Server is running')});






// import express from 'express'
// import path from 'path'
// import http from 'http'

// const port: number = 5000

// class App {
//     private server: http.Server
//     private port: number

//     constructor(port: number) {
//         this.port = port
//         const app = express()
//         app.use(express.static(path.join(__dirname,'../client')))

//         this.server = new http.Server(app)
//     }

//     public Start() {
//         this.server.listen(this.port, () => {
//             console.log(`Server listening on port ${this.port}.`)
//         })
//     }
// }

// new App(port).Start()