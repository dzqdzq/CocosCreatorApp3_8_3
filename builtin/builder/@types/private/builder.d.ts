export interface ITaskResultMap {
    'build-task/script'?: {
        projectJs: string;
        systemJs: string;
        polyfillsJs: string | null;
    },
    'build-task/pac'?: IBuildPacResult;
}

export interface IBuildPacResult {
    spriteToImage: Record<string, string>;
    textureToImage: Record<string, string>;
    imageToPac: Record<string, string>;
}

export interface IBuildWorker {
    Ipc: {
        // send message to father
        send: (message: string, ...args: any[]) => void;
        on: (message: string, callbask: (event: any, ...arg: any[]) => Promise<void>) => void;
    }
}
