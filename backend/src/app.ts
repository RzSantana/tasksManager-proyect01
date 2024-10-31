import { Hono } from 'hono'
import userRoutes from './components/users/user.routes'

const app = new Hono()

// Routes
app.get('/', (ctx) => {
    return ctx.text('Welcome to API tasksManager')
})
app.route('/users', userRoutes)

export default app