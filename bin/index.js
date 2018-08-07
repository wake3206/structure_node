import express from 'express';
// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';
const PORT = 3001;
const path = require('path');
// initialize the application and create the routes
const app = express();
const router = express.Router();
router.use(express.static(
  path.resolve(__dirname, 'client', 'build'),
  { maxAge: '30d' },
));


router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express edit by Golf.' });
});


// root (/) should always serve our server rendered page
router.use('*', serverRenderer);
// other static resources should just be served as they are

// tell the app to use the above rules
app.use(router);
// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});