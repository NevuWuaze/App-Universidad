import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tecleon.miapp',
  appName: 'mi-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;