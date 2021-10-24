
import onUser from './events/user'

export const userCreated = onUser.created
export const userDeleted = onUser.deleted

console.log('-------> start')
console.log(`run ${new Date().toLocaleString()}`)
console.log('-------> end')
