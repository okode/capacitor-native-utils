import { WebPlugin } from '@capacitor/core';
import { NativeUtilsPlugin } from './definitions';
export declare class NativeUtilsWeb extends WebPlugin implements NativeUtilsPlugin {
    constructor();
    isProtectedDataAvailable(): Promise<{
        value: boolean;
    }>;
}
declare const NativeUtils: NativeUtilsWeb;
export { NativeUtils };
