declare module "@capacitor/core" {
  interface PluginRegistry {
    NativeUtils: NativeUtilsPlugin;
  }
}

export interface NativeUtilsPlugin {
  isProtectedDataAvailable(): Promise<{value: string}>;
}
