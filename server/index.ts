import express from 'express';
import routes from './src/routes';
import db from './models'
import cors from 'cors'

const app  = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

db.sequelize.authenticate()
db.sequelize.sync().then(()=> {
  app.listen(port, ()=> {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  })
})

app.use('/api', routes)

