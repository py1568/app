import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({ prefix: '/geo' })

const sign = 'abcd';

router.get('/getPosition', async (ctx) => {

    ctx.body = {
      province: '天津市',
      city: '吉首市'
    }
  
})

export default router;