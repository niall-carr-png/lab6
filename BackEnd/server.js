// Defining constants
const express = require('express')
const app = express()
const port = 4000 // Port number for backend
const bodyParser = require('body-parser') // Module which parses the JSON

app.use(bodyParser.urlencoded({ extended: false }))

// Connects bodyParser to json
app.use(bodyParser.json())

// CORS prevents error while while reading JSON data from the Express server
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// Declares address of JSON within localhost:3000
app.post('/api/books', (req, res) => {
    console.log(req.body); 
    res.send('Book Added')
})

//Output for localhost landing page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//JSON data
app.get('/api/books', (req, res)=>{
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
        res.status(200).json({
            myBooks:books
        })
})

//Message for running on terminal
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
