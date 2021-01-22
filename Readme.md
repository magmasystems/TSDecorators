# TSDecorators

A sample of how you can use Class Decorators in Typescript to discover a list of microservice classes.

The file `./decorators/microservice.ts` defines the *@microservice* decorator. When the decorator function is called, the class information is added to a global static HashTable that contains the name of the service and a reference to the constructor of the class.

Two rules:

1. Make sure that `index.ts` exports all of the microservices
2. We need to use the *const/require pattern* in `main.ts`, and not the *import* pattern.

Here is an example of how you can instantiate each microservice:

```javascript
    for (const k of AppContext.MicroserviceMap) {
        console.log(`We are creating microservice ${k[0]}`);
        const service: any = new k[1]('MyPetName');  // "MyPetName" is an argument to the constructor
    }
```
