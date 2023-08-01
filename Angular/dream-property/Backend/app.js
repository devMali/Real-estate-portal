const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3031', 'http://localhost:3000','http://localhost:4200']
}))

app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb'}))


const port = 3031;

require('./database/routers/routes')(app);

app.listen(port,()=>{
    console.log('app is running');
})


