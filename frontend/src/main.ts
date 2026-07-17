// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component'; // 💡 O nome correto é AppComponent e ele fica na pasta app
import { AppComponent } from './app/app';

// Inicializa a aplicação usando o componente raiz correto
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));