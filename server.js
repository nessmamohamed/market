const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser')
      mongoose = require('mongoose')

      app.use(function (req, res, next) {

      

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
        
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
      
        // Pass to next layer of middleware
        next();
      }); 


app.get('/', (req, res) => {
    res.end('hello world')
})



app.use(bodyParser.json())

app.use('/api/item', require('./routes/api/items'))






//mongoose url 
const url = 'mongodb+srv://nesso:111222333Nn@nmcluster-tb0vp.mongodb.net/test?retryWrites=true&w=majority'

//connect mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).then (() => console.log('mongoose connected ...'))
  .catch(err => console.log(err))


//PORT
const port = process.env.PORT || 5000

app.listen(port , () => {
    console.log('server has started ...' )
})

//in production 
if(process.env.NODE_ENV === 'production'){
    //static file
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
