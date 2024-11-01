import { Hono } from 'hono'
import userRoutes from './components/users/user.routes'
import logRequets from './middleware/logger.middleware'
import { cors } from 'hono/cors'

const app = new Hono()

// Middlewares
app.use('*', cors({ origin: '*' }));
app.use('*', logRequets)

app.get('/', (ctx) => {
    return ctx.text('Welcome to API tasksManager')
})
app.route('/users', userRoutes)

export default app