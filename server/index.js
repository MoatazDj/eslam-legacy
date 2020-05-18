require ('dotenv').config();

const express = require ('express');
const cors = require ('cors');
const bodyparser = require ('body-parser');


const routes = require('./routes');

const app = express();



app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use('/auth', routes.auth);
app.use('/verses', routes.verses);
app.use('/favourites', routes.favourites)
app.use('/paypal', routes.paypal)



const port = process.env.PORT || 8200;
app.listen(port , () => {
    console.log (`listening on port ${port}`);
});