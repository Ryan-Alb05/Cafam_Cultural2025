import { Router } from "express"

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/reservas', (req, res) => {
    res.render('reservas');
  });

  router.use((req, res) => {
    res.status(404).render('404');
  });

export default router
  