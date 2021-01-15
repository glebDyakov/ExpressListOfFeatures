// import {getAll, create, remove} from ''
const router = require('express').Router()
const {getAll, create, remove} = require('../controllers/servers.js')

router.get('/api/server', getAll)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

// router.put()


// router.patch

// router.get('/api/server', (req, res)=>{
//     res.json({test:42})
// })


export default router