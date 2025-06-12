import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'conexiones',
    loadComponent: () =>
      import('@angular-monorepo/conexiones').then((m) => m.ConexionesComponent),
    pathMatch: 'full',
  },
  {
    path: 'monitoreo',
    loadComponent: () =>
      import('@angular-monorepo/monitoreo').then((m) => m.MonitoreoComponent),
    pathMatch: 'full',
  },
];
