import { AppContext } from "../AppContext";

export function microservice<T extends { new(...args: any[]): {}; }>(constructorFunction: T)
{
    if (AppContext == null)
    {
        throw new Error('Microservice decorator: AppContext is null')
    }

    AppContext.MicroserviceMap.set(constructorFunction.name, constructorFunction);
    // console.log(constructorFunction);

    let newConstructorFunction: any = function (...args) 
    {
        console.log("before invoking: " + constructorFunction.name);
        let func: any = function () 
        {
            return new constructorFunction(...args);
        }
        func.prototype = constructorFunction.prototype;
        let result: any = new func();
        console.log("after invoking: " + constructorFunction.name);
        console.log('object created: ' + JSON.stringify(result));
        return result;
    }

    newConstructorFunction.prototype = constructorFunction.prototype;
    return newConstructorFunction;
}

export function microservice2(): ClassDecorator 
{
    return (target: Function) => {
        // console.log("Microservice2: target " + target);
    };
  }