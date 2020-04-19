import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import {User} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>
  selectedUser: User = new User()

  constructor(private firebase: AngularFireDatabase) { }

  getUsers(){
    return this.userList = this.firebase.list("users")
  }
  insertUser(user : User){
    this.userList.push({
      userName : user.userName,
      documentType : user.documentType,
      documentID: user.documentID,
      userEmail: user.userEmail,
      enterpriseImg: user.enterpriseImg,
      enterpriseName: user.enterpriseName,
      userPhone: user.userPhone,
      password: user.password

    })

  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      userName : user.userName,
      documentType : user.documentType,
      documentID: user.documentID,
      userEmail: user.userEmail,
      enterpriseImg: user.enterpriseImg,
      enterpriseName: user.enterpriseName,
      userPhone: user.userPhone,
      password: user.password
    })
  }

  deleteProduct($key:string){
    this.userList.remove($key)
  }
}
