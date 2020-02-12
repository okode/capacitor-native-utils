declare module "@capacitor/core" {
    interface PluginRegistry {
        NativeUtils: NativeUtilsPlugin;
    }
}
export interface NativeUtilsPlugin {
    /**
     * Only iOS.
     */
    isProtectedDataAvailable(): Promise<{
        value: boolean;
    }>;
}
