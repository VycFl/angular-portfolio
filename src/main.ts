import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([{ path: "", 
    loadComponent: () =>
    import('./app/home/home-page/home-page.component').then(m => m.HomePageComponent),
  }]),
  ]
});