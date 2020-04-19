import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { snapshotChanges } from "@angular/fire/database";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  userList: User[];
  enterpriseUser : User[]
  listofUsers = [];
  entName: string = "empresa1"

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .snapshotChanges()
      .subscribe((item) => {
        this.userList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          this.listofUsers.push(x);
          x["$key"] = element.key;
          this.userList.push(x as User);
        });
        this.enterpriseUser = this.userList.filter(element => element.enterpriseName=== this.entName)

        this.listofUsers = [];
      });
  }
}
