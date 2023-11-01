import Fastify from 'fastify'
import ServeStatic from '@fastify/static'
import { join } from 'path'

const app = Fastify({ logger: true })

app.register(ServeStatic, {
    root: join(process.cwd(), 'public'),
    prefix: '/'
})

app.listen({ port: 4000 })
