const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime
console.log(`System Uptime is: ${os.uptime()}`)

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freMem: os.freemem(),
}
console.log(currentOs)