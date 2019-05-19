declare module 'shake.js' {
    interface Shake {
        new(option: any): Shake;
        start(): void;
        stop(): void;
    }
    const Shake : ShakeConstructor;
    export = Shake;
}
