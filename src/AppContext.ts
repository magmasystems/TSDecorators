export class AppContext
{
    public static MicroserviceMap: Map<string, { new(...args: any[]): {} }> = new Map<string, { new(...args: any[]): {} }>();
}
