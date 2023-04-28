const   express = require('express'),
        cors = require('cors'),
        morgan = require('morgan');

// Init                 👇
const app = express();
const path = require('path');

// CORS                 👇
app.use(cors());

// Morgan               👇
morgan.token('body', req => {
    return JSON.stringify(req.body)
});
app.use(morgan(':method :url :body'))

// Settings             👇
app.set('port', process.env.VLM_PORT || 3000);

// Middlewares: JSON    👇
app.use(express.urlencoded({
    extended: false
})); // Convert form data to json
app.use(express.json());

// Routes           👇
app.use(
    require('./routes/main'),
);

// Static files     👇
app.use(express.static(path.join(__dirname, 'static')));

module.exports = app;