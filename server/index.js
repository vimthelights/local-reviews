const express = require('express');
const bodyParser = require('body-parser');
const reviewsRouter = require('./controllers/reviews.js');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes

app.use('/api/reviews', reviewsRouter);
// app.use('/api/:listingid/features', );
// app.use('/api/users', );
//



const PORT = 3000;
app.listen(PORT);
console.log('listening on port 3000');