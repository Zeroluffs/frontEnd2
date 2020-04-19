import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { OperatorService } from "src/app/services/operator.service";
import { NgForm } from "@angular/forms";
import { Operator } from 'src/app/models/operator.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.css"],
})
export class OperatorsComponent implements OnInit {
  email: string = ""
  password: string = ""
  operatorForm: Operator
  constructor(
    public userService: UserService,
    public operatorService: OperatorService,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.operatorService.getOperators();
    this.resetForm();
  }

  onSubmit(registerForm: NgForm) {
    let enterpriseName = this.userService.selectedUser.enterpriseName
    let tempForm: Operator
    tempForm = registerForm.value
    this.operatorForm = {
      $key : tempForm.$key,
      operatorEmail : tempForm.operatorEmail,
      operatorName : tempForm.operatorName,
      operatorPhoto : tempForm.operatorPhoto,
      operatorAddress: tempForm.operatorAddress,
      operatorPassword: tempForm.operatorPassword,
      operatorAccess: true,
      operatorEnterprise: tempForm.operatorEnterprise
    }

    this.operatorService.insertOperator(this.operatorForm);
    this.email = this.operatorForm.operatorEmail
    this.password = this.operatorForm.operatorPassword
    this.onAddUser()
    this.resetForm();
  }

  onAddUser(){
    this.authService.registerUser(this.email,this.password).then((res)=>{
    }).catch(err => console.log('err', err.message))
  }

  resetForm(operatorForm?: NgForm) {
    if (operatorForm!=null) {
      operatorForm.reset()
      this.operatorService.selectedOperator = new Operator()
    }
  }
}
