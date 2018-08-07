import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './client/src/App';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express edit by Golf.' });
});

app.get('*',(req,res)=>{
  const html = ReactDOMServer.renderToString(<App />);
  res.send(html)
})

console.log('NODE_ENV',process.env.NODE_ENV)

app.listen(port, () => console.log(`Listening on port ${port}`));
