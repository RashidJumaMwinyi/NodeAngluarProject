require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');
const { use } = require('./server/routes/main');

const app = express();
// use localhost when developing and process in production
const PORT = (process.env.PORT);

// Connect to DB
// connectDB();

// Middleware
// This allows us to pass data from form to form
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(methodOverride('_method'));

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//         mongoUrl: process.env.MONGODB_URI
//     }),
    

// }))


// This is for the css part
// app.use(express.static('public'));

// Template Engine
// app.use(expressLayout);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');



// app.locals.isActiveRoute = isActiveRoute;

// Importing tis routs from main file
app.use('/', require('./server/routes/main'))
// app.use('/', require('./server/routes/admin'))

connectDB();
// Example route to get all users
app.get('/api/users', async (req, res) => {
    let client;

    try {
        client = await connectDB();
        const result = await client.db('test').collection('employees').find({}).toArray(); // Ensure you specify the collection
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        if (client) {
            await client.close(); // Close the client connection if it was opened
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

