import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const productsRoutes = express.Router()

productsRoutes.use(authMiddleware)

productsRoutes.get('/', async (req, res) => {
  return res.render('products/index.ejs')
})

export { productsRoutes }
