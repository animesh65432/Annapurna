export class RecipeStreamer {
    private res: import('http').ServerResponse;

    constructor(res: import('http').ServerResponse) {
        this.res = res;
        this.setupHeaders();
    }

    private setupHeaders() {
        this.res.setHeader('Content-Type', 'text/event-stream');
        this.res.setHeader('Cache-Control', 'no-cache');
        this.res.setHeader('Connection', 'keep-alive');
        this.res.setHeader('Access-Control-Allow-Origin', '*');
    }

    send(step: string, message: string, data?: any) {
        const payload = { step, message, ...data };
        this.res.write(`data: ${JSON.stringify(payload)}\n\n`);
    }

    complete(recipe: any) {
        this.send('complete', 'Recipe ready!', recipe);
        this.res.end();
    }

    error(message: string) {
        this.send('error', message, 0);
        this.res.end();
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}