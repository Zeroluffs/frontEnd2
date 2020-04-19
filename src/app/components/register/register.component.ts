import { Component, OnInit } from "@angular/core";

//services
import { UserService } from "src/app/services/user.service";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  email: string = ""
  password: string = ""
  userForm: User

  constructor(public userService: UserService, public router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
  }




  onSubmit(registerForm: NgForm) {
    this.userService.insertUser(registerForm.value);
    this.userForm = registerForm.value
    this.email = this.userForm.userEmail
    this.password = this.userForm.password
    this.onAddUser()
    this.resetForm(registerForm);
  }

  
  onAddUser(){
    this.authService.registerUser(this.email,this.password).then((res)=>{
      this.router.navigate(["admin/user-list"])
    }).catch(err => console.log('err', err.message))
  }

  resetForm(userForm?: NgForm) {
    if (userForm!=null) {
      userForm.reset()
      this.userService.selectedUser = new User()
    }
  }
}
