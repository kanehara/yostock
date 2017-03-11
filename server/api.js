import express from 'express'
const apiRouter = express.Router()


apiRouter.use((req, res, next) => {
  console.log('api called')
  next()
})

apiRouter.get('/', (req, res) => {
  console.log('api root called')
  res.send('hello from api root')
})

export default apiRouter;