import { microservice, microservice2 } from '../decorators/microservice';

@microservice
@microservice2()
export default class PetService 
{
    public Name: string;
    private steps: number = 0;

    constructor(name: string) 
    {
        this.Name = name;
    }

    public walk() 
    {
        this.steps++;
        console.log(`Walking: steps ${this.steps}`);
    }
}
