import express from 'express'
const app = express()
const port = 3001
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
const db ={
  users:[
    {id:1,name:"Ivan"},
    {id:2, name:"Petr"},
    {id:3,name:"Sergey"},
    {id:4,name:"Yaroslav"}
  ]
}
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})
app.get('/users', (req, res) => {
  let Users =db.users;
  if(req.query.name){
    Users = Users.filter(c => c.name.indexOf(req.query.name as string)>-1)
  }res.json(Users)
})
app.get('/users/:id', (req, res) => {
  const foundUser = db.users.find(c=>c.id === +req.params.id)
  if(!foundUser){
    res.sendStatus(404); //or res.end();
    return}
  res.json(foundUser)
})
app.post('/users', (req, res) => {
  const createdCourse = {
    id: +(new Date()),
    name: req.body.title}
  db.users.push(createdCourse)
  res.json(createdCourse)
  console.log(JSON.stringify(createdCourse))
})
app.delete('/users/:id', (req, res) => {
  const deletedUser =  db.users.find(c=>c.id === +req.params.id)
  if(!deletedUser){
    res.sendStatus(404)
    return;
  }
  db.users = db.users.filter(c=>c.id !== +req.params.id)
  res.status(200)
})
app.put("/users/:id", (req, res) =>{
  if(!req.body.name){
    return
  }
  const foundUser = db.users.find(c=>c.id === +req.params.id)

  if(!foundUser){
    res.sendStatus(404);
    return
  }
  foundUser.name = req.body.name
  res.json(foundUser)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})