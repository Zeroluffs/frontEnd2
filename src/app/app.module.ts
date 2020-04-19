import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'

//Frebase
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment'
import { RegisterComponent } from './components/register/register.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { AdminComponent } from './components/admin/admin.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './components/users/login/login.component'
import { RouterModule, Routes } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth/auth'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { OperatorsComponent } from './components/operators/operators.component'
import { UserListComponent } from './components/admin/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    AdminComponent,
    NavbarComponent,
    LoginComponent,
    NavbarComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [LoginComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
