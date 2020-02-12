import { WebPlugin } from '@capacitor/core';
import { NativeUtilsPlugin } from './definitions';

export class NativeUtilsWeb extends WebPlugin implements NativeUtilsPlugin {
  constructor() {
    super({
      name: 'NativeUtils',
      platforms: ['web']
    });
  }

  async isProtectedDataAvailable(): Promise<{value: boolean}> {
    return { value: true };
  }
}

const NativeUtils = new NativeUtilsWeb();

export { NativeUtils };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(NativeUtils);
