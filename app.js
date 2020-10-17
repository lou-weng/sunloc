const express = require('express')
const app = express()
const port = 3001
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.post('*', (req, res) => {
    console.log(req);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})