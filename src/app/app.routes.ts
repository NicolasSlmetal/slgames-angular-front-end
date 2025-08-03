import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'about',
        component: About,
        title: 'Sobre'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    }
];
