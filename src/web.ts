import { WebPlugin } from '@capacitor/core';
import { NativeUtilsPlugin } from './definitions';

export class NativeUtilsWeb extends WebPlugin implements NativeUtilsPlugin {
  constructor() {
    super({
      name: 'NativeUtils',
      platforms: ['web']
    });
  }

  async isProtectedDataAvailable(): Promise<{value: string}> {
    return true;
  }
}

const NativeUtils = new NativeUtilsWeb();

export { NativeUtils };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(NativeUtils);
