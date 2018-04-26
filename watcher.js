const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 7000


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.use(express.static(__dirname));
app.use('/static', express.static('./public'));

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`);
})