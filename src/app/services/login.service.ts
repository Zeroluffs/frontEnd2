import { Injectable } from '@angular/core'
import { Login } from '../models/login.model'
import { BehaviorSubject, Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentEmail: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public currentEmail$: Observable<any> = this.currentEmail.asObservable()

  updateCurrentEmail(updatedEmail) {
    this.currentEmail.next(updatedEmail)
  }
  loggedUser: Login = new Login()
  constructor() {}
}
