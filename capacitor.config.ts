import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cestify',
  webDir: 'www',
  server: {
    hostname: 'coeur.app.br',
    androidScheme: 'https'
  }
};

export default config;
