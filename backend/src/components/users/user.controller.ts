import { type Context } from 'hono'
import UserService from './user.services'

const userService = new UserService()

class UserController {
    public async getUsers(context: Context) {
        const users = await userService.getAllUsers()
        return context.json(users)
    }

    public async getUser(context: Context) {
        const uuid = context.req.param('uuid')
        const user = await userService.getUserById(uuid)
        return user ? context.json(user) : context.notFound()
    }

    public async createUser(context: Context) {
        const { id, name, lastname, email, password } = await context.req.json()
        
        // Basic validation
        if (!id || !name || !lastname || !email || !password) {
            return context.json({ error: 'Todos los campos son obligatorios' }, 400)
        }
        
        // Validation email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return context.json({ error: 'El formato del email es inválido' }, 400)
        }
        
        
        
        const newUser = await userService.createUser({
            id: id,
            name: name,
            lastname: lastname,
            email: email,
            password: password
        })
        return context.json(newUser, 201)
    }

    public async deleteUser(context: Context) {
        const uuid = context.req.param('uuid')
        await userService.deleteUser(uuid)
        return context.json({ message: 'User deleted' })
    }

}

export default UserController