import * as readline from 'readline';
import { AppContext } from './AppContext';

// 1. Make sure that index.ts exports all of the microservices
// 2. We need to use the const/require here
const Microservices = require('./index');

try
{
    for (const k of AppContext.MicroserviceMap) {
        console.log(`Service is ${k[0]}`);
        const service: any = new k[1]('Shadow');
        if (service.Name)
        {
            console.log(`  Name is ${service.Name}`);
        }
    }
}
catch (e)
{
    console.error(e);
}

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Press ENTER to quit", (_) => { rl.close(); });
