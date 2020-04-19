import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/users/login/login.component';
import { UserListComponent } from '../components/admin/user-list/user-list.component';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
      path: 'admin/user-list',
      component: UserListComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
