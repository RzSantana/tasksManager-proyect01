import { Prisma, PrismaClient, type User } from '@prisma/client'

const prisma = new PrismaClient()

class UserService {
    public async getAllUsers() {
        return await prisma.user.findMany()
    }

    public async getUserById(uuid: string) {
        return await prisma.user.findUnique({
            where: { id: (uuid) }
        })
    }

    public async createUser(data: User) {
        try {
             return await prisma.user.create({ data })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                return 
            }
        }
    }

    public async deleteUser(uuid: string) {
        return await prisma.user.delete({
            where: { id: (uuid) }
        })
    }
}

export default UserService