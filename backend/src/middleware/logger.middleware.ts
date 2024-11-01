import { plugin } from 'bun'
import chalk, { type ChalkInstance } from 'chalk'
import type { Context } from 'hono'
import { getConnInfo } from 'hono/bun'

async function logRequets(context: Context, next: () => Promise<void>) {
    const { method, url} = context.req
    const startTime = Date.now() // Timpo inicial de la ejecucion
    let  clientIp = getConnInfo(context).remote.address
    if (clientIp === '::1') clientIp = '127.0.0.1'
    else if (clientIp?.startsWith('::ffff:')) clientIp = clientIp.split('::ffff:')[1]    
    
    await next() // Ejecucion de la solicitud

    const endTime = Date.now() // Timpo final de la ejecucion
    const duration = endTime - startTime // Duracion en milisegundos


    // Formato de la fecha y la hora
    const now = new Date()
    // Formatear la hora en HH:mm:ss
    const formattedTime = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    // Formatear la fecha en YYYY-MM-DD
    const formattedDate = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/').reverse().join('-'); // Convertir DD/MM/YYYY a YYYY-MM-DD


    // Asignacion colores segúb el método HTTP
    let methodColor: ChalkInstance

    switch (method) {
        case 'GET':
            methodColor = chalk.green
            break
        case 'POST':
            methodColor = chalk.blue
            break
        case 'PUT':
            methodColor = chalk.yellow;
            break;
        case 'DELETE':
            methodColor = chalk.red;
            break;
        default:
            methodColor = chalk.white;
    }

    // Determinar color segun el estado de la respuesta
    const statusCode = context.res.status
    const statusColor = statusCode >= 200 && statusCode <= 400 ? chalk.bgGreen : chalk.bgRedBright
    const coloredStatus = statusColor(chalk.bold(`[${statusCode}]`))
    
    console.log(
        chalk.gray(`[${formattedDate}|${formattedTime}]`),
        coloredStatus,
        methodColor(chalk.bold(method)),
        chalk.gray(clientIp),
        chalk.italic(chalk.cyan(url)),
        chalk.magenta(`${duration}ms`)
    )

}

export default logRequets