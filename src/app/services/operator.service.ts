import { Injectable } from "@angular/core";
import { Operator } from "../models/operator.model";
import { AngularFireDatabase, AngularFireList } from "@angular/fire//database";

@Injectable({
  providedIn: "root",
})
export class OperatorService {
  operatorList: AngularFireList<any>;
  selectedOperator: Operator = new Operator();

  constructor(private firebase: AngularFireDatabase) {}

  getOperators() {
    return (this.operatorList = this.firebase.list("operators"));
  }

  insertOperator(operator: Operator) {
    this.operatorList.push({
      operatorName: operator.operatorName,
      operatorEmail: operator.operatorEmail,
      operatorPassword: operator.operatorPassword,
      operatorAccess: operator.operatorAccess,
      operatorPhoto: operator.operatorPhoto,
      operatorAddress: operator.operatorAddress,
      operatorEnterprise: operator.operatorEnterprise
    });
  }

  updateOperator(operator: Operator) {
    this.operatorList.update(operator.$key, {
      operatorName: operator.operatorName,
      operatorEmail: operator.operatorEmail,
      operatorPassword: operator.operatorPassword,
      operatorAccess: operator.operatorAccess,
      operatorPhoto: operator.operatorPhoto,
      operatorAddress: operator.operatorAddress,
      operatorEnterprise: operator.operatorEnterprise
    });
  }

  deleteOperator($key: string) {
    this.operatorList.remove($key);
  }
}
