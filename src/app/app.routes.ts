import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    loadComponent() {
      return import('./about/about.component').then((c) => c.AboutComponent);
    },
  },
  {
    path: 'todo',
    loadComponent() {
      return import('./todo/todo.component').then((c) => c.TodoComponent);
    },
  },
];
