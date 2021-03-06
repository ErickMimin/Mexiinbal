import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
    {
      path: 'Login',
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
      path:'Register',
      component: RegisterComponent,
      data: { title: 'Registro' }      
    },
    {
      path: 'Home',
      component: HomeComponent,
      data: { title: 'Home' }
    },
    {
      path: '**',
      component: LoginComponent,
      data: { title: 'Login' }
    }
  ];
  export const RoutesApp = RouterModule.forRoot(ROUTES);