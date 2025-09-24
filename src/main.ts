import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/Select';
import '@ui5/webcomponents/dist/Option';
import '@ui5/webcomponents/dist/Table';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
