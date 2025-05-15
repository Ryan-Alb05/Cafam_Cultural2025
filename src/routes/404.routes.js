import { Router } from "express"

const router = Router()

router.use((req, res)=>{
    res.status(400).render('404')
})

router.get('/reservas', (req, res) => {
    res.render('reservas');
  });

router.get('/index', (req, res)=>{
    res.render('index')
})