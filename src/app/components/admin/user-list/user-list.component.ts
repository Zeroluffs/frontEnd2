import { Component, OnInit } from '@angular/core'
import { Operator } from 'src/app/models/operator.model'
import { OperatorService } from 'src/app/services/operator.service'
import { User } from 'src/app/models/user.model'
import { LoginService } from 'src/app/services/login.service'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[]
  enterpriseUser: User[]
  listofUsers = []
  enterpriseData: User
  enterpriseName: string

  ///

  ///
  operatorlist: Operator[]
  enterpriseOperators: Operator[]
  listOfOperators = []
  entName: string = 'empresa1'
  userEmail: string
  constructor(
    public operatorService: OperatorService,
    public loginService: LoginService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loginService.currentEmail$.subscribe(
      (currentEmail) => (this.userEmail = currentEmail)
    )
    console.log(JSON.stringify(this.userEmail), 'hiiiiiiiii')

    this.userService
      .getUsers()
      .snapshotChanges()
      .subscribe((item) => {
        this.userList = []
        item.forEach((element) => {
          let x = element.payload.toJSON()
          this.listofUsers.push(x)
          x['$key'] = element.key
          this.userList.push(x as User)
        })
        this.enterpriseData = this.userList.find(
          ({ userEmail }) => userEmail === this.userEmail
        )

        console.log(JSON.stringify(this.enterpriseData), 'DATA')
        this.enterpriseName = this.enterpriseData.enterpriseName

        this.listofUsers = []
      })
    console.log(JSON.stringify(this.enterpriseName))
    this.operatorService
      .getOperators()
      .snapshotChanges()
      .subscribe((item) => {
        this.operatorlist = []
        item.forEach((element) => {
          let x = element.payload.toJSON()
          this.listOfOperators.push(x)
          x['key'] = element.key
          this.operatorlist.push(x as Operator)
        })
        this.enterpriseOperators = this.operatorlist.filter(
          (element) => element.operatorEnterprise === this.enterpriseName
        )
        this.listOfOperators = []
      })
  }
}
