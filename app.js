const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const get  = require('./controller/getData') ;

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  console.log('OPEN ROOT !');
  res.status(200).json({ msg: 'Create your API', port  });
});

app.get("/data_remuneration", async (req, res) => {
  const resp = await get(req,req.body)
  return res.status(resp.code).json(resp.status ? resp.data : resp.error);
});

app.listen(port, () => {
  console.log(`listening port ${port}`);
});
