import express from 'express'
import { addNewUsuario } from '../services/usuarios/addNewUsuario.js'
import bcrypt from 'bcrypt'

const authRoutes = express.Router()

authRoutes.get('/register', (req, res) => {
  return res.render('auth/register.ejs')
})

authRoutes.post('/register', async (req, res) => {
  try {
    const { nombre, usuario, passwd } = req.body
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(passwd, 12)
    const query = await addNewUsuario(nombre, usuario, hashedPassword)
    console.log(query)
    if (query.includes(1)) {
      return res.redirect('/')
    } else {
      return res.redirect('/auth/register')
    }
  } catch (error) {
    console.log(error)
    return res.json(error.message)
  }
})

export { authRoutes }
