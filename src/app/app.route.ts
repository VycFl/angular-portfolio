import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [{
    path: "", 
    loadComponent: () =>
    import('./home/home-page/home-page.component'),
}] as Route[];