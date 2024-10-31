import { Hono, type Context } from 'hono'
import UserController from './user.controller'

const userRoutes = new Hono()
const userController = new UserController()

userRoutes.get('/', (context) => userController.getUsers(context))
userRoutes.get('/:uuid', (context) => userController.getUser(context))
userRoutes.post('/', (context) => userController.createUser(context))
userRoutes.delete('/:uuid', (context) => userController.deleteUser(context))

export default userRoutes