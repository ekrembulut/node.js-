const os = require('os');

const platformInfo = {
    name : os.type(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(platformInfo)