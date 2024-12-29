import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIntlFormatterModuleEvents } from './ExpoIntlFormatter.types';

declare class ExpoIntlFormatterModule extends NativeModule<ExpoIntlFormatterModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIntlFormatterModule>('ExpoIntlFormatter');
