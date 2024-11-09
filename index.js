import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let data = [];
let nextid = 1;

//add a new tea

app.post("/teas", (req, res) => {
  req.body.price;
  const { name, price } = req.body;
  const newtea = { id: nextid++, name, price };
  data.push(newtea);
  res.status(201).send(newtea);
});

//get all tea

app.get("/teas", (req, res) => {
  res.status(200).send(data);
});

//get a tea with id

app.get("/teas/:id", (req, res) => {
  const tea = data.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

//Update tea

app.put("teas", (req, res) => {
  const tea = data.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.send(200).send(tea);
});

app.delete("/teas/:id", (req, res) => {
  data.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  data.splice(index, 1);
  return res.status(204).send("Deleted");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`);
});
