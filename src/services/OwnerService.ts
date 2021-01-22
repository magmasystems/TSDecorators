import { microservice, microservice2 } from '../decorators/microservice';

@microservice
@microservice2()
export default class OwnerService 
{
    public Name: string;

    constructor(name: string) 
    {
        this.Name = name;
    }
}
