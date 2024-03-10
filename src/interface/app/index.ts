
export interface App {
    appName: string;
    appCode: string;
    appAddress: string;
    appIcon?: string;
}

export namespace App {
    export interface Instance {
        id: string;
        instanceName: string;
        instanceCode: string;
        instancePackage: string;
        instanceIcon: string;
        instanceAddress: string;
        instanceType: string;
        installer: string;
        desc: string;
        status: number;
        createAt: string;
        updateAt: string;
    }
}