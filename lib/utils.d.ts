export declare const keyReg: RegExp;
export declare const splitKey: (str: string) => Array<string> | null;
export declare const isSpecialKey: (key: string) => boolean;
export declare const validatKey: (e: any, ename: string) => boolean | undefined;
export declare const validPropName: (e: KeyboardEvent, keyName: string) => boolean;
