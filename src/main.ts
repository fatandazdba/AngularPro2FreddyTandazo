import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/

try {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
} catch (e) {
  // logs `Can't resolve all parameters for App: (?)`
  console.log('Bootstrap error', e);
}
