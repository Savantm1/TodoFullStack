import express from 'express'
import cors from 'cors'
import sequelize from './db'
import fileUpload from 'express-fileupload'
import path from "path"
import router from './routes/index'
import { errorHandler } from './middleware/ErrorHandlerMiddleware'
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


const start = async () => {
  try {
    await sequelize.authenticate(); // установка соединения с БД
    await sequelize.sync(); // данная ф-ция сверяет бд со схемой данных
    app.listen(PORT, () => console.log("server started at PORT:", PORT));
  } catch (e) {
    console.log(e);
  }
};

start();

